import type { GETImageResponse, GETNodesResponse } from './types.d';
import { FILE_WARNING, icon_name_to_pascal } from './utils';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import * as prettier from 'prettier';
import { ofetch } from 'ofetch';
import split from 'just-split';
import {
	SVG_OUT_DIR,
	SVELTE_OUT_DIR,
	EXPORTS_REL,
	EXPORTS_FILE,
	ICON_COUNT_FILE,
	KEYWORDS_OVERRIDES_FILE,
} from './paths';

console.time('generate icons');

const figma = ofetch.create({
	retry: 3,
	baseURL: 'https://api.figma.com/v1',
	headers: {
		'X-FIGMA-TOKEN': import.meta.env.SCRIPTS_FIGMA_API_KEY,
	},
});

//? Configure figma file and frame locations

const FILE_ID = 'jEkeNggsUIB8cAWKRudyP2';

//? You can get the id from figma.currentPage.selection[0].id via console
const NODE_ID = '378:22835';

if (!NODE_ID || !NODE_ID.includes(':')) {
	throw new Error(
		`Please pass the node id as the first argument. E.g. "pnpm generate:icons 297:186836"`,
	);
}

console.log('\nCleaning Output Directories');

//? Clean & Create svg output directory
await rm(SVG_OUT_DIR, { recursive: true, force: true });
await mkdir(SVG_OUT_DIR, { recursive: true });

//? Clean & Create svelte output directory
await rm(SVELTE_OUT_DIR, { recursive: true, force: true });
await mkdir(SVELTE_OUT_DIR, { recursive: true });

console.log('\nFinding Frames');

//? Get the frame with the icons
const frames = await figma<GETNodesResponse>(
	`/files/${FILE_ID}/nodes?ids=${NODE_ID}`,
);

interface BaseIcon {
	id: string;
	name: string;
	keywords: string[] | null;
}

interface Icon extends BaseIcon {
	svg: string;
	svgSvelte: string;
}

const base_icons: BaseIcon[] = [];

//? Parse an icon name e.g. oi-sparkles-fill[ai,machine-learning]
function parse_icon_name(raw: string) {
	const result = raw.match(/oi-([\w\d-]+)(?:\[([\w\d-,]+)\])?/);
	const [, name, keywords] = result || [];

	if (!name) {
		return {
			name: null,
			keywords: null,
		};
	}

	return {
		name,
		keywords: (keywords?.split(',') || null) as string[] | null,
	};
}

for (const [frame_id, frame] of Object.entries(frames.nodes)) {
	console.log(`  Processing frame (${frame_id}) "${frame.document.name}"`);

	//? Loop over the found icons
	for (const icon of frame.document.children) {
		const { name, keywords } = parse_icon_name(icon.name);

		if (!name) {
			throw new Error(
				`Icon (${icon.id}) "${icon.name}" doesn't have a name`,
			);
		}

		base_icons.push({
			name,
			id: icon.id,
			keywords,
		});
	}

	console.log(`      Found ${frame.document.children.length} Icons`);
}

const duplicate_icons = base_icons
	.map((icon) => icon.name)
	.filter((name, index, base) => base.indexOf(name) != index);

//? If duplicates are found log them and exit
if (duplicate_icons.length) {
	console.error(`\n\nERR: Found duplicate icons:`);

	for (const name of duplicate_icons) {
		console.error(`  "${name}"`);
	}

	process.exit(1);
}

//? All icons
const icons: Icon[] = [];

//? Process icons in chunks of 100
for (const chunk of split(base_icons, 100)) {
	console.log(`  Processing Icon Chunk`);
	const ids = chunk.map(({ id }) => id);

	//? Fetch the icon svg urls
	const { images } = await figma<GETImageResponse>(
		`/images/${FILE_ID}?format=svg&svg_include_id=true&ids=${ids}`,
	);

	//? Run all the icon downloads and formats in parallel
	await Promise.all(
		chunk.map(async (base_icon) => {
			//? Find the SVG link to download from
			const link = images[base_icon.id];
			if (!link) throw new Error(`No link for ${base_icon.id}`);

			console.log(
				`      Downloading Icon (${base_icon.id}) "${base_icon.name}"`,
			);

			//? Fetch the svg data from the link
			const raw_svg = await ofetch(link, { responseType: 'text' });

			//? Format the svg with prettier
			let svg = await prettier.format(raw_svg, {
				singleQuote: true,
				quoteProps: 'as-needed',
				trailingComma: 'all',
				bracketSpacing: true,
				arrowParens: 'always',
				semi: true,
				useTabs: true,
				tabWidth: 4,
				parser: 'html',
			});

			//? Remove weird whitespace
			svg = svg.trim();

			//? Turn id="oi_vector_2" -> class="oi-vector"
			svg = svg.replace(/id="([^ "]+?)(?:_\d)?"/g, 'class="$1"');

			// Turn width="24" and height="24" into width={size} and height={size}, but don't match "stroke-width"
			// Turn stroke="black" into stroke={color}
			// Turn fill="black" into fill={color}
			// Add dynamic stroke widths
			// Add class="obra-icon" after xmlns
			const svgSvelte = svg
				.replace(/(width|height)="24"(?! stroke-width)/g, '$1={size}')
				.replace(/stroke="black"/g, 'stroke={color}')
				.replace(/fill="black"/g, 'fill={color}')
				.replace(/stroke-width="2"/g, 'stroke-width={strokeWidth}')
				.replace(/stroke-width="3"/g, 'stroke-width={strokeWidth*1.5}')
				.replace(/stroke-width="4"/g, 'stroke-width={strokeWidth*2}')
				.replace(
					/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g,
					'xmlns="http://www.w3.org/2000/svg"\n\tclass="obra-icon"',
				);

			//? Add each icon to the icons array
			icons.push({
				...base_icon,
				svg,
				svgSvelte,
			});
		}),
	);
}

//? Sort the array in place (mutates)
icons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

//? Generate the svelte component from an svg

const svelte_template = (svgSvelte: string) => `<!-- ${FILE_WARNING} -->

<svelte:options namespace="svg" />

<script lang="ts">
  export let size = 24
  export let color = 'currentColor'
  // svelte-ignore unused-export-let
  export let strokeWidth = 2
</script>

${svgSvelte}
`;

console.log('\nWriting Icons');

for (let { svg, svgSvelte, name } of icons) {
	console.log(`  Writing Icon "${name}"`);

	const svelte_component = svelte_template(svgSvelte);
	const pascal_name = icon_name_to_pascal(name);

	//? Write the svg file
	await writeFile(
		`${SVG_OUT_DIR}/${name}.svg`,
		`<!-- ${FILE_WARNING} -->\n\n${svg}`,
		'utf-8',
	);

	//? Write the svelte component
	await writeFile(
		`${SVELTE_OUT_DIR}/${pascal_name}.svelte`,
		svelte_component,
		'utf-8',
	);
}

console.log('\nGenerating exports');

//? Generate the export statements
const export_statements = icons.map(({ name }) => {
	const pascal_name = icon_name_to_pascal(name);
	return `export { default as Icon${pascal_name} } from '${EXPORTS_REL}/${pascal_name}.svelte';`;
});

//? Write out the ts file
await writeFile(
	EXPORTS_FILE,
	`//${FILE_WARNING}\n${export_statements.join('\n')}\n`,
	'utf-8',
);

//? Write the icon count
await writeFile(
	ICON_COUNT_FILE,
	`//${FILE_WARNING}\nexport default ${icons.length};\n`,
	'utf-8',
);

const keywords_overrides = Object.fromEntries([
	['//', FILE_WARNING],
	...icons
		.filter((icon) => icon.keywords?.length)
		.map(({ name, keywords }) => [name, keywords]),
]);

//? Write out the keywords overrides
await writeFile(
	KEYWORDS_OVERRIDES_FILE,
	JSON.stringify(keywords_overrides, null, 2),
);

console.log(`\nDone - ${icons.length} icons generated\n`);
console.timeEnd('generate icons');
