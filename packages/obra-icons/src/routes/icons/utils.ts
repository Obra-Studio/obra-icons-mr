import type * as iconMap from '$lib';

/**
 * Turns "IconAlignCenter" to "align-center"
 */
export function iconNameKebab(str: string) {
	return str
		.replace('Icon', '')
		.match(/[A-Z][a-z]*/g)
		?.join(' ')
		.toLowerCase();
}

/**
 * Turns "align-center" to "IconAlignCenter"
 */
export function iconNamePascal(name: string) {
	const pascal = name
		.split('-')
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join('');

	return `Icon${pascal}`;
}
