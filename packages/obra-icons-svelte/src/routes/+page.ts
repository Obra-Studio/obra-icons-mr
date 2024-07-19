import { create, insert, search } from '@orama/orama';
import iconSearchData from '$lib/keywords';

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

export async function load() {
	const searchDb = await create({
		schema: {
			nameKebab: 'string',
			namePascal: 'string',
			keywords: 'string[]',
		},
	});

	const entries = Object.entries(iconSearchData);

	for (const [nameKebab, keywords] of entries) {
		await insert(searchDb, {
			namePascal: iconNamePascal(nameKebab),
			nameKebab,
			keywords,
		});
	}

	return {
		defaultSearch: await search(searchDb, {
			properties: ['nameKebab'],
			limit: entries.length,
			term: '',
		}),
		searchDb,
	};
}
