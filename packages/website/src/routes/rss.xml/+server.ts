import { Feed } from 'feed';
import { posts } from '../blog/posts';
import { isPostPublished } from '$lib/blog/utils';

export async function GET() {
	const feed = new Feed({
		title: 'Obra Icons Blog',
		description: 'Updates and news about Obra Icons',
		id: 'https://icons.obra.studio/',
		link: 'https://icons.obra.studio/',
		language: 'en',
		image: 'https://icons.obra.studio/favicon.png',
		favicon: 'https://icons.obra.studio/favicon.ico',
		copyright: `All rights reserved ${new Date().getFullYear()}, Obra Icons`,
		updated: new Date(
			Math.max(...posts.map((post) => post.date.getTime())),
		),
		feedLinks: {
			rss: 'https://icons.obra.studio/rss.xml',
		},
	});

	const publishedPosts = posts.filter(isPostPublished);

	for (const post of publishedPosts) {
		feed.addItem({
			title: post.title,
			id: `https://icons.obra.studio/blog/${post.slug}`,
			link: `https://icons.obra.studio/blog/${post.slug}`,
			description: post.content, // Use the full content here
			content: post.content, // Include the full content here as well
			date: post.date,
			author: [{ name: 'Obra Icons' }],
		});
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/rss+xml',
		},
	});
}
