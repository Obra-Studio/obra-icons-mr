import type { BlogMetadata } from '$lib/blog/types';

const blogFiles = import.meta.glob<{ metadata: BlogMetadata }>(
	'./**/+page.md',
	{ eager: true },
);

const posts = Object.entries(blogFiles).map(([path, file]) => ({
	slug: path.replace('./', '').slice(0, -'/+page.md'.length),
	...file.metadata,
}));

export async function load() {
	return { posts };
}
