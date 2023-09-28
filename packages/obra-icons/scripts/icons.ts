import type { GETImageResponse, GETNodesResponse } from './types.d';
import { writeFile, mkdir, rm } from 'node:fs/promises';
import * as prettier from 'prettier';
import { ofetch } from 'ofetch';
import OpenAI from 'openai';
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
const NODE_ID = '187:57793';

console.log('Cleaning Output Directories');

//? Clean & Create svg output directory
await rm(SVG_OUT_DIR, { recursive: true, force: true });
await mkdir(SVG_OUT_DIR, { recursive: true });

//? Clean & Create svelte output directory
await rm(SVELTE_OUT_DIR, { recursive: true, force: true });
await mkdir(SVELTE_OUT_DIR, { recursive: true });

console.log('Finding Frames');

//? Get the frame with the icons
const frames = await figma<GETNodesResponse>(
	`/files/${FILE_ID}/nodes?ids=${NODE_ID}`,
);

interface Icon {
	name: string;
	svg: string;
}

//? All icons
const icons: Icon[] = [];

//? Map of icon id:name
const name_map = new Map<string, string>();

for (const [frame_id, frame] of Object.entries(frames.nodes)) {
	console.log(`  Processing frame (${frame_id}) "${frame.document.name}"`);

	//? Get the icon ids and add the name to the id:name map
	const icon_ids = frame.document.children.map((icon) => {
		name_map.set(icon.id, icon.name);
		return icon.id;
	});

	console.log('    Finding Icons');

	//? Fetch the icon svg urls
	const images = await figma<GETImageResponse>(
		`/images/${FILE_ID}?format=svg&ids=${icon_ids.join(',')}`,
	);

	//? Run all the icon downloads and formats in parallel
	await Promise.all(
		Object.entries(images.images).map(async ([id, link]) => {
			//? Find the icon name from the icon id:name map
			const name = name_map.get(id);
			if (!name) throw new Error(`No name for ${id}`);

			console.log(`      Downloading Icon (${id}) "${name}"`);

			//? Fetch the svg data from the link
			const raw_svg = await ofetch(link, { responseType: 'text' });

			//? Format the svg with prettier
			const svg = await prettier.format(raw_svg, {
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

			//? Add each icon to the icons array
			icons.push({ name, svg });
		}),
	);
}

//? Generate the svelte component from an svg
const svelte_template = (svg: string) => `<svelte:options namespace="svg" />

${svg}
`;

function icon_name_to_pascal(name: string) {
	return name
		.split('-')
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join('');
}

console.log('Writing Icons');

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

console.log('Generating exports');

const export_statements = icons.map(({ name }) => {
	const pascal_name = icon_name_to_pascal(name);
	return `export { default as Icon${pascal_name} } from '${EXPORTS_REL}/${pascal_name}.svelte';`;
});

await writeFile(EXPORTS_FILE, export_statements.join('\n'), 'utf-8');

console.log(`Done - ${icons.length} icons generated`);
console.timeEnd('generate icons');
