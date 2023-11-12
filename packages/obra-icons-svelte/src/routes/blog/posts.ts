import type { BlogMetadata, BlogFrontmatter } from '$lib/blog/types';

const blogFiles = import.meta.glob<{ metadata: BlogFrontmatter }>(
	'./**/+page.md',
	{ eager: true },
);

export const posts: BlogMetadata[] = Object.entries(blogFiles)
	.map(([path, file]) => ({
		slug: path.replace('./(posts)/', '').slice(0, -'/+page.md'.length),
		...file.metadata,
		date: new Date(file.metadata.date),
	}))
	.sort((a, b) => b.date.getTime() - a.date.getTime());
