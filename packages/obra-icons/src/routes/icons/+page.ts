import { create, insert, search } from '@orama/orama';
import iconSearchData from '$lib/keywords';
import { iconNamePascal } from './utils';

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
		iconsCount: entries.length,
		searchDb,
	};
}
