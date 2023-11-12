import { error } from '@sveltejs/kit';
import { posts } from '../posts.js';

export async function load({ url }) {
	const slug = url.pathname.split('/').pop();
	const post = posts.find((post) => post.slug === slug);

	if (!post) {
		throw error(404, 'Unable to find post');
	}

	return {
		...post,
	};
}
