import iconSearchData from '$lib/keywords';
import { writable } from 'svelte/store';
import Fuse from 'fuse.js';

/**
 * Turns "align-center" to "IconAlignCenter"
 */
function iconNamePascal(name: string) {
	const pascal = name
		.split('-')
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join('');

	return `Icon${pascal}`;
}

interface SearchResult {
	namePascal: string;
	nameKebab: string;
	keywords: string[];
}

function createSearch() {
	const mapped = Object.entries(iconSearchData).map(
		([nameKebab, keywords]): SearchResult => ({
			namePascal: iconNamePascal(nameKebab),
			nameKebab,
			keywords,
		}),
	);

	const fuse = new Fuse(mapped, {
		keys: [
			{ name: 'nameKebab', weight: 3 },
			{ name: 'keywords', weight: 2 },
		],
	});

	let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
	const results = writable<SearchResult[]>(mapped);

	function search(query: string) {
		results.set(
			query ? fuse.search(query).map((result) => result.item) : mapped,
		);
	}

	return {
		subscribe: results.subscribe,
		search(query: string) {
			clearTimeout(timeout);
			timeout = setTimeout(() => search(query.trim()), 300);
		},
	};
}

export const iconSearch = createSearch();
