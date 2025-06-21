import 'dotenv/config';
import type { GETImageResponse, GETNodesResponse } from './types.d';
import { FILE_WARNING, format, icon_name_to_pascal } from './utils';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import type { Package } from './icon-pkgs';
import * as pkgs from './icon-pkgs';
import { env } from 'node:process';
import { join } from 'node:path';
import { ofetch } from 'ofetch';
import split from 'just-split';
import {
	KEYWORDS_OVERRIDES_FILE,
	ICON_COUNT_FILE,
	SVG_OUT_DIR,
	SVELTE_PKG,
	REACT_PKG,
} from './paths';

console.time('generate icons');

const figma = ofetch.create({
	retry: 3,
	baseURL: 'https://api.figma.com/v1',
	headers: {
		'X-FIGMA-TOKEN': env.SCRIPTS_FIGMA_API_KEY!,
	},
});

//? Configure figma file and frame locations

const FILE_ID = 'jEkeNggsUIB8cAWKRudyP2';

//? You can get the id from figma.currentPage.selection[0].id via console
const NODE_ID = process.argv[2];

if (!NODE_ID || !NODE_ID.includes(':')) {
	throw new Error(
		`Please pass the node id as the first argument. E.g. "pnpm generate:icons 297:186836"`,
	);
}

console.log('\nCleaning Output Directories');

//? Clean & create output directories
for (const dir of [
	join(SVELTE_PKG, './src/icons'),
	join(REACT_PKG, './src/icons'),
	SVG_OUT_DIR,
]) {
	await rm(dir, { recursive: true, force: true });
	await mkdir(dir, { recursive: true });
}

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
	svg_template: string;
	svg: string;
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
			let svg = await format(raw_svg, 'html');

			svg = svg
				// Remove weird whitespace
				.trim()
				// Turn id="oi_vector_2" -> class="oi-vector"
				.replace(/id="([^ "]+?)(?:_\d)?"/g, 'class="$1"');

			const svg_template = svg
				// Remove keywords from the overall group (g) element
				.replace(/<g class="oi(.*)\[.*]">/g, '<g class="oi$1">')
				// Turn width="24" and height="24" into width={size} and height={size}, but don't match "stroke-width"
				.replace(/(width|height)="24"(?! stroke-width)/g, '$1={size}')
				// Turn stroke="black" into stroke={color}
				.replace(/stroke="black"/g, 'stroke={color}')
				// Turn fill="black" into fill={color}
				.replace(/fill="black"/g, 'fill={color}')
				// Add dynamic stroke widths
				.replace(/stroke-width="2"/g, 'stroke-width={strokeWidth}')
				.replace(/stroke-width="3"/g, 'stroke-width={strokeWidth*1.5}')
				.replace(/stroke-width="4"/g, 'stroke-width={strokeWidth*2}')
				// Add general class of "obra-icon" after xmlns
				.replace(
					/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g,
					'xmlns="http://www.w3.org/2000/svg"\n\tclass="obra-icon"',
				);

			//? Add each icon to the icons array
			icons.push({
				...base_icon,
				svg_template,
				svg,
			});
		}),
	);
}

//? Sort the array in place (mutates)
icons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

//? Write the svgs
for (const { svg, name } of icons) {
	console.log(`  Writing svg "${name}"`);

	await writeFile(
		`${SVG_OUT_DIR}/${name}.svg`,
		`<!-- ${FILE_WARNING} -->\n\n${svg}`,
		'utf-8',
	);
}

//? Fn to write a pkg type
async function write_pkg(path: string, pkg: Package) {
	console.log(`  Writing package ${pkg.name}`);

	for (const { svg_template, name } of icons) {
		console.log(`    Writing ${pkg.name} package icon "${name}"`);

		const name_pascal = icon_name_to_pascal(name);

		const raw_component =
			name.endsWith('-fill') && !name.endsWith('-combo-fill')
				? pkg.generate(svg_template, name_pascal, 'fill')
				: pkg.generate(svg_template, name_pascal, 'stroke');

		const component = await format(raw_component, pkg.prettier_parser);

		//? Write the component
		await writeFile(
			`${path}/src/icons/${name_pascal}.${pkg.file_ext}`,
			component,
			'utf-8',
		);
	}

	console.log('    Generating exports');

	//? Generate the export statements
	const export_statements = icons
		.map(({ name }) => {
			const name_pascal = icon_name_to_pascal(name);
			return `export { default as Icon${name_pascal} } from './icons/${name_pascal}${pkg.name == 'react' ? '' : `.${pkg.file_ext}`}';`;
		})
		.concat(pkg.additional_exports || []);

	//? Write out the ts file
	await writeFile(
		join(path, './src/index.ts'),
		`//${FILE_WARNING}\n${export_statements.join('\n')}\n`,
		'utf-8',
	);
}

console.log('\nWriting Icons');
await write_pkg(SVELTE_PKG, pkgs.svelte);
await write_pkg(REACT_PKG, pkgs.react);

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
