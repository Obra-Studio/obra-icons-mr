import type { GETImageResponse, GETNodesResponse } from './types.d';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { icon_name_to_pascal } from './utils';
import * as prettier from 'prettier';
import { ofetch } from 'ofetch';
import split from 'just-split';
import {
	SVG_OUT_DIR,
	SVELTE_OUT_DIR,
	EXPORTS_REL,
	EXPORTS_FILE,
	ICON_COUNT_FILE,
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
// You can get the id from figma.currentPage.selection.id via console
const NODE_ID = '266:8772';

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

interface Icon {
	name: string;
	svg: string;
	svgSvelte: string;
}

//? Map of icon name:id
const icon_name_map = new Map<string, string>();

for (const [frame_id, frame] of Object.entries(frames.nodes)) {
	console.log(`  Processing frame (${frame_id}) "${frame.document.name}"`);

	const duplicates: [id: string, name: string][] = [];

	//? Loop over the found icons
	for (const icon of frame.document.children) {
		//? Normalise the icon name
		const name = icon.name.replace('oi-', '');

		//? Add duplicate icons to an array
		if (icon_name_map.has(name)) {
			duplicates.push([icon.id, name]);
		}

		//? Add the icon id & name to the name:id map
		icon_name_map.set(name, icon.id);
	}

	//? If duplicates are found log them and exit
	if (duplicates.length) {
		console.error(
			`\n\nERR: Found duplicates in frame (${frame_id}) "${frame.document.name}:`,
		);

		for (const [id, name] of duplicates) {
			console.error(`  (${id}) "${name}"`);
		}

		process.exit(1);
	}

	console.log(`      Found ${frame.document.children.length} Icons`);
}

//? Split the icon_name_map into chunks of 100 for downloading svgs
const icon_chunks = split(
	[...icon_name_map] as [name: string, id: string][],
	100,
);

console.log(`\nProcessing ${icon_chunks.length} Icon Chunks`);

//? All icons
const icons: Icon[] = [];

//? Process each icon chunk
for (const chunk of icon_chunks) {
	console.log(`  Processing Icon Chunk`);
	const ids = chunk.map(([name, id]) => id);

	//? Fetch the icon svg urls
	const { images } = await figma<GETImageResponse>(
		`/images/${FILE_ID}?format=svg&svg_include_id=true&ids=${ids}`,
	);

	//? Run all the icon downloads and formats in parallel
	await Promise.all(
		chunk.map(async ([name, id]) => {
			//? Find the SVG link to download from
			const link = images[id];
			if (!link) throw new Error(`No link for ${id}`);

			console.log(`      Downloading Icon (${id}) "${name}"`);

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
			const svgSvelte = svg
				.replace(/(width|height)="24"(?! stroke-width)/g, '$1={size}')
				.replace(/stroke="black"/g, 'stroke={color}')
				.replace(/fill="black"/g, 'fill={color}')
				.replace(/stroke-width="2"/g, 'stroke-width={strokeWidth}')
				.replace(/stroke-width="3"/g, 'stroke-width={strokeWidth*1.5}')
				.replace(/stroke-width="4"/g, 'stroke-width={strokeWidth*2}');

			//? Add each icon to the icons array
			icons.push({ name, svg, svgSvelte });
		}),
	);
}

//? Sort the array in place (mutates)
icons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

//? Generate the svelte component from an svg

const svelte_template_stroke = (
	svgSvelte: string,
) => `<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
  export let strokeWidth = 2
</script>

${svgSvelte}
`;

const svelte_template_fill = (
	svgSvelte: string,
) => `<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
</script>

${svgSvelte}
`;

console.log('\nWriting Icons');

for (let { svg, svgSvelte, name } of icons) {
	console.log(`  Writing Icon "${name}"`);

	let svelte_component: string;
	//? Get the svelte component template
	if (name.includes('fill')) {
		svelte_component = svelte_template_fill(svgSvelte);
	} else {
		svelte_component = svelte_template_stroke(svgSvelte);
	}

	const pascal_name = icon_name_to_pascal(name);

	//? Write the svg file
	await writeFile(`${SVG_OUT_DIR}/${name}.svg`, svg, 'utf-8');

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
await writeFile(EXPORTS_FILE, `${export_statements.join('\n')}\n`, 'utf-8');

//? Write the icon count
await writeFile(ICON_COUNT_FILE, `export default ${icons.length};\n`, 'utf-8');

console.log(`\nDone - ${icons.length} icons generated\n`);
console.timeEnd('generate icons');
