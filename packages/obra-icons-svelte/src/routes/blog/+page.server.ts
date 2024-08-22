import { posts } from './posts';
import { isPostPublished } from '$lib/blog/utils';
import { dev } from '$app/environment';

export async function load() {
    const filteredPosts = dev
        ? posts // Show all posts in dev mode
        : posts.filter(isPostPublished);

    return { posts: filteredPosts };
}