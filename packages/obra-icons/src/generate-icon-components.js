import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = path.join(__dirname, './lib/icons');
const outputDir = path.join(__dirname, './lib/svelte-icons');
const libDir = path.join(__dirname, './lib');

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir);
}

let exportContent = '';  // Initialize an empty string to collect export statements

function toIconIdentifier(str) {
	let camelCase = str
		.replace(/-([a-z])/g, g => g[1].toUpperCase())  // Convert dashes to camelCase
		.replace(/_([a-z])/g, g => g[1].toUpperCase()); // Convert underscores to camelCase

	// If the string starts with a number, prefix with an underscore
	if (/^[0-9]/.test(camelCase)) {
		camelCase = '_' + camelCase;
	}

	// Remove any remaining non-alphanumeric characters
	camelCase = camelCase.replace(/[^a-zA-Z0-9_]/g, '');

	// Prefix with "Icon"
	return "Icon" + camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

fs.readdirSync(inputDir).forEach(file => {
	const extname = path.extname(file);
	const basename = path.basename(file, extname);
	if (extname === '.svg') {
		const svgContent = fs.readFileSync(path.join(inputDir, file), 'utf-8');
		const svelteComponentContent = `<script></script>\n\n${svgContent}`;

		// Write SVG content to a Svelte file, preserving the original file name
		fs.writeFileSync(path.join(outputDir, `${basename}.svelte`), svelteComponentContent, 'utf-8');

		const iconName = toIconIdentifier(basename);  // Convert the basename to an icon identifier for export
		exportContent += `export { default as ${iconName} } from './svelte-icons/${basename}.svelte';\n`;
	}
});

// Write the collected export statements to an index.js file in the output directory
fs.writeFileSync(path.join(libDir, 'index.js'), exportContent, 'utf-8');
