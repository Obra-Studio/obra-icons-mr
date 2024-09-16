import { join } from 'node:path';

const WEBSITE = join(import.meta.dirname, '../../website');

//? Configure the obra icons packages
export const SVELTE_PKG = join(import.meta.dirname, '../../obra-icons-svelte');
export const REACT_PKG = join(import.meta.dirname, '../../obra-icons-react');

//? Configure where the raw svgs are writen
export const SVG_OUT_DIR = join(WEBSITE, './src/lib/svgs');

//? Keywords Index File
// prettier-ignore
export const KEYWORDS_OVERRIDES_FILE = join(WEBSITE, './src/lib/keywords-overrides.json');
export const KEYWORDS_FILE = join(WEBSITE, './src/lib/keywords.ts');
export const ICON_COUNT_FILE = join(WEBSITE, './src/lib/count.ts');
