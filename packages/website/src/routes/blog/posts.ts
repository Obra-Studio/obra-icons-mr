import type { BlogMetadata, BlogFrontmatter } from '$lib/blog/types';

const blogFiles = import.meta.glob<{
	metadata: BlogFrontmatter;
	default: { render: () => { html: string } };
}>('./**/+page.md', { eager: true });

export const posts: BlogMetadata[] = Object.entries(blogFiles)
	.map(([path, file]) => ({
		slug: path.replace('./(posts)/', '').slice(0, -'/+page.md'.length),
		...file.metadata,
		tags: file.metadata.tags ?? [],
		date: new Date(file.metadata.date),
		content: file.default.render().html,
	}))
	.sort((a, b) => b.date.getTime() - a.date.getTime());
