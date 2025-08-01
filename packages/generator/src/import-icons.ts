import 'dotenv/config';
import split from 'just-split';
import * as console from 'node:console';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { env } from 'node:process';
import { ofetch } from 'ofetch';
import { ICON_COUNT_FILE, KEYWORDS_OVERRIDES_FILE, SVG_OUT_DIR } from './paths';
import type { GETImageResponse, GETNodesResponse } from './types';
import { FILE_WARNING, format, prompt } from './utils';

console.time('import icons');

const figma = ofetch.create({
	retry: 3,
	baseURL: 'https://api.figma.com/v1',
	headers: {
		'X-FIGMA-TOKEN': env.SCRIPTS_FIGMA_API_KEY!,
	},
});

const FILE_ID =
	env.SCRIPTS_FIGMA_FILE_ID ||
	(await (async () => {
		const choice = await prompt(
			'Choose Figma file:\n  1. Default (jEkeNggsUIB8cAWKRudyP2)\n  2. Custom ID\nEnter choice (1 or 2): ',
		);

		if (choice === '1' || choice === '') {
			return 'jEkeNggsUIB8cAWKRudyP2';
		} else if (choice === '2') {
			return await prompt('Enter custom Figma file ID: ');
		} else {
			throw new Error('Invalid choice. Please enter 1 or 2.');
		}
	})());

//? You can get the id from figma.currentPage.selection[0].id via console
const NODE_ID =
	process.argv[2] ||
	(await prompt(
		'Enter Figma node ID (e.g. "297:186836"). You can find the node id by running the Figma Plugin Obra Icons dev tools, and running the Create dev copy action while selecting the icons source frame.',
	));

if (!NODE_ID || !NODE_ID.includes(':')) {
	throw new Error(`Invalid Figma node id`);
}

console.log('\nCleaning Output Directories');

//? Clean output directory
await rm(SVG_OUT_DIR, { recursive: true, force: true });
await mkdir(SVG_OUT_DIR, { recursive: true });

console.log('\nFinding Frames');

//? Get the frame with the icons
const frames = await figma<GETNodesResponse>(
	`/files/${FILE_ID}/nodes?ids=${NODE_ID}`,
);

interface Icon {
	id: string;
	name: string;
	keywords: string[] | null;
	svg?: string;
}

const icons: Icon[] = [];

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
			console.warn(
				`      Icon (${icon.id}) "${icon.name}" doesn't have a name`,
			);
			continue;
		}

		if (icons.some((i) => i.name === name)) {
			console.warn(`      Duplicate Icon "${icon.name}"`);
		}

		icons.push({
			name,
			id: icon.id,
			keywords,
		});
	}
}

console.log(`Found ${icons.length} Icons`);

//? Process icons in chunks of 100
for (const chunk of split(icons, 100)) {
	console.log(`  Processing Icon Chunk`);
	const ids = chunk.map(({ id }) => id);

	//? Fetch the icon svg urls
	const { images } = await figma<GETImageResponse>(
		`/images/${FILE_ID}?format=svg&svg_include_id=true&ids=${ids}`,
	);

	//? Run all the icon downloads and formats in parallel
	await Promise.all(
		chunk.map(async (icon) => {
			//? Find the SVG link to download from
			const link = images[icon.id];
			if (!link) throw new Error(`No link for ${icon.id}`);

			console.log(`      Downloading Icon (${icon.id}) "${icon.name}"`);

			//? Fetch the svg data from the link
			const raw_svg = await ofetch(link, { responseType: 'text' });

			//? Format the svg with prettier
			const svg = await format(raw_svg, 'html');

			icon.svg = svg
				// Remove weird whitespace
				.trim()
				// Turn id="oi_vector_2" -> class="oi-vector"
				.replace(/id="([^ "]+?)(?:_\d)?"/g, 'class="$1"');
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

console.log(`\nDone - ${icons.length} icons imported\n`);
console.timeEnd('import icons');
