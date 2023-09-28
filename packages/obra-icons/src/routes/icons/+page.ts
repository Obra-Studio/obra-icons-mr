import { create, insert } from '@orama/orama';
import { iconNamePascal } from './utils';
import iconSearchData from '$lib/keywords';

export async function load() {
	const searchDb = await create({
		schema: {
			name: 'string',
			componentName: 'string',
			keywords: 'string[]',
		},
	});

	const entries = Object.entries(iconSearchData);

	for (const [name, keywords] of entries) {
		await insert(searchDb, {
			componentName: iconNamePascal(name),
			keywords,
			name,
		});
	}

	return {
		iconsCount: entries.length,
		searchDb,
	};
}
