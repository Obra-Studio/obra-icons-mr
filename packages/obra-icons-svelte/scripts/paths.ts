import { join } from 'desm';

//? Configure exports
export const EXPORTS_FILE = join(import.meta.url, '../src/package/index.ts');
export const EXPORTS_REL = './icons';

//? Configure output directories
export const SVELTE_OUT_DIR = join(import.meta.url, '../src/package/icons');
export const SVG_OUT_DIR = join(import.meta.url, '../src/lib/svgs');

//? Keywords Index File
export const KEYWORDS_OVERRIDES_FILE = join(
	import.meta.url,
	'../src/lib/keywords-overrides.json',
);
export const KEYWORDS_FILE = join(import.meta.url, '../src/lib/keywords.ts');
export const ICON_COUNT_FILE = join(import.meta.url, '../src/lib/count.ts');
