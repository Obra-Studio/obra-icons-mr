import { join } from 'desm';

//? Configure exports
export const EXPORTS_FILE = join(
	import.meta.url,
	'../../obra-icons-svelte/src/package/index.ts',
);
export const EXPORTS_REL = './icons';

//? Configure output directories
export const SVELTE_OUT_DIR = join(
	import.meta.url,
	'../../obra-icons-svelte/src/package/icons',
);
export const SVG_OUT_DIR = join(
	import.meta.url,
	'../../obra-icons-svelte/src/lib/svgs',
);

//? Keywords Index File
export const KEYWORDS_OVERRIDES_FILE = join(
	import.meta.url,
	'../../obra-icons-svelte/src/lib/keywords-overrides.json',
);
export const KEYWORDS_FILE = join(
	import.meta.url,
	'../../obra-icons-svelte/src/lib/keywords.ts',
);
export const ICON_COUNT_FILE = join(
	import.meta.url,
	'../../obra-icons-svelte/src/lib/count.ts',
);
