import type { BlogMetadata, BlogFrontmatter } from '$lib/blog/types';
import type { Component } from 'svelte';
import { render } from 'svelte/server';

const blogFiles = import.meta.glob<{
	metadata: BlogFrontmatter;
	default: Component;
}>('./**/+page.md', { eager: true });

export const posts: BlogMetadata[] = Object.entries(blogFiles)
	.map(([path, file]) => ({
		slug: path.replace('./(posts)/', '').slice(0, -'/+page.md'.length),
		...file.metadata,
		tags: file.metadata.tags ?? [],
		date: new Date(file.metadata.date),
		content: render(file.default).body,
	}))
	.sort((a, b) => b.date.getTime() - a.date.getTime());
