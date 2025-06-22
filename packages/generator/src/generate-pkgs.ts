import 'dotenv/config';
import { readFile } from 'fs/promises';
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import allPackages from './packages';
import { Package } from './packages/types';
import { SVG_OUT_DIR } from './paths';
import { FILE_WARNING, format, icon_name_to_pascal } from './utils';

console.time('generate icons');

console.log('\nCleaning Output Directories');

const packages = process.argv[2]
	? ([allPackages.find((p) => p.name === process.argv[2])].filter(
			Boolean,
		) as Package[])
	: allPackages;
if (packages.length === 0) throw new Error('No package found');

//? Clean & create output directories
for (const pkg of packages) {
	await rm(pkg.icon_path, { recursive: true, force: true });
	await mkdir(pkg.icon_path, { recursive: true });
}

console.log('\nProcessing icons');

const files = await readdir(SVG_OUT_DIR);

//? Sort the array in place (mutates)
const icons = files
	.filter((f) => f.endsWith('.svg'))
	.map((file) => {
		const name = file.slice(0, -4);
		const pascal = icon_name_to_pascal(name);
		return { file, name, pascal };
	});

//? Sort the array in place (mutates)
icons.sort((a, b) => (a.pascal > b.pascal ? 1 : -1));

for (const { file, name, pascal } of icons) {
	console.log(`    Reading icon "${name}"`);

	const source = await readFile(join(SVG_OUT_DIR, file), 'utf8');

	const template = source
		// Remove comments
		.replace(/<!--.*?-->/gm, '')
		.trim()
		// Remove keywords from the overall group (g) element
		.replace(/<g class="oi(.*)\[.*]">/g, '<g class="oi$1">')
		// Turn width="24" and height="24" into width={size} and height={size}, but don't match "stroke-width"
		.replace(/(width|height)="24"(?! stroke-width)/g, '$1={size}')
		// Turn stroke="black" into stroke={color}
		.replace(/stroke="black"/g, 'stroke={color}')
		// Turn fill="black" into fill={color}
		.replace(/fill="black"/g, 'fill={color}')
		// Add dynamic stroke widths
		.replace(/stroke-width="(\d+)"/g, (g0, g1) => {
			const n = Number(g1);
			const r = n > 2 ? `*${n / 2}` : '';
			return `stroke-width={strokeWidth${r}}`;
		})
		// Add general class of "obra-icon" after xmlns
		.replace(
			/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g,
			'xmlns="http://www.w3.org/2000/svg"\n\tclass="obra-icon"',
		);

	const type =
		name.endsWith('-fill') && !name.endsWith('-combo-fill')
			? 'fill'
			: 'stroke';

	for (const pkg of packages) {
		const file = `${pascal}.${pkg.file_ext}`;
		console.log(`        Writing ${pkg.name} package icon "${file}"`);

		const raw_component = pkg.generate(template, pascal, type);

		const component = await format(raw_component, pkg.prettier_parser);

		//? Write the component
		await writeFile(
			join(pkg.icon_path, file),
			component,
			'utf-8',
		);
	}
}

console.log();

for (const pkg of packages) {
	console.log(`Generating ${pkg.name} barrel file`);
	const lines = [
		`//${FILE_WARNING}`,
		...icons.map(({ pascal }) => {
			return `export { default as Icon${pascal} } from './icons/${pascal}.${pkg.import_ext}';`;
		}),
		...pkg.additional_exports,
	];

	//? Write out the ts file
	await writeFile(pkg.barrel_path, lines.join('\n'), 'utf-8');
}

console.log(
	`\nDone - ${icons.length} icons generated for ${packages.length} package(s)\n`,
);
console.timeEnd('generate icons');
