import { iconNamePascal } from './utils';
import { create, insert } from '@orama/orama';
import iconSearchData from '$lib/keywords';

export async function load() {
	const searchEngine = await create({
		schema: {
			name: 'string',
			componentName: 'string',
			keywords: 'string[]',
		},
	});

	for (const [name, keywords] of Object.entries(iconSearchData)) {
		await insert(searchEngine, {
			componentName: iconNamePascal(name),
			keywords,
			name,
		});
	}

	return {
		searchEngine,
	};
}
