import type { GETImageResponse, GETNodesResponse } from './types.d';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import * as prettier from 'prettier';
import { ofetch } from 'ofetch';
import split from 'just-split';
import {
	SVG_OUT_DIR,
	SVELTE_OUT_DIR,
	EXPORTS_REL,
	EXPORTS_FILE,
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
const NODE_ID = '218:23456';

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

			//? Turn id="oi-vector_2" -> class="oi-vector"
			svg = svg.replace(/id="([^ "]+?)(?:_\d)?"/g, 'class="$1"');

			//? Add each icon to the icons array
			icons.push({ name, svg });
		}),
	);
}

//? Sort the array in place (mutates)
icons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

//? Generate the svelte component from an svg
const svelte_template = (svg: string) => `<svelte:options namespace="svg" />

${svg}
`;

/**
 * ? Turns arrow-left -> ArrowLeft
 */
function icon_name_to_pascal(name: string) {
	return name
		.split('-')
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join('');
}

console.log('\nWriting Icons');

for (const { svg, name } of icons) {
	console.log(`  Writing Icon "${name}"`);

	//? Get the svelte component template
	const svelte_component = svelte_template(svg);
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

const export_statements = icons.map(({ name }) => {
	const pascal_name = icon_name_to_pascal(name);
	return `export { default as Icon${pascal_name} } from '${EXPORTS_REL}/${pascal_name}.svelte';`;
});

await writeFile(EXPORTS_FILE, export_statements.join('\n'), 'utf-8');

console.log(`\nDone - ${icons.length} icons generated\n`);
console.timeEnd('generate icons');
