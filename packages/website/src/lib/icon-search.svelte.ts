import iconSearchData from '$lib/keywords';
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

const allSearchResults = Object.entries(iconSearchData).map(
	([nameKebab, keywords]): SearchResult => ({
		namePascal: iconNamePascal(nameKebab),
		nameKebab,
		keywords,
	}),
);

const fuse = new Fuse(allSearchResults, {
	keys: [
		{ name: 'nameKebab', weight: 3 },
		{ name: 'keywords', weight: 2 },
	],
});

class Search {
	private _query = $state<string | null>(null);

	get query() {
		return this._query;
	}

	private _results = $state<SearchResult[]>(allSearchResults);

	get results() {
		return this._results;
	}

	private timeout: ReturnType<typeof setTimeout> | undefined = undefined;

	search(query: string) {
		clearTimeout(this.timeout);
		this._query = query;
		this.timeout = setTimeout(() => {
			const results = query
				? fuse.search(query).map((result) => result.item)
				: allSearchResults;

			this._results = results;
		}, 300);
	}

	clear() {
		this._query = null;
		this._results = allSearchResults;
	}
}

export const iconSearch = new Search();
