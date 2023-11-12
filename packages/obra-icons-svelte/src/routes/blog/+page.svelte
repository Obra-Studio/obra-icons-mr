<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	export let data;
</script>

<ul>
	{#each data.posts as post}
		<li>
			<a href="/blog/{post.slug}">
				{post.title} - {formatDate(post.date)}
			</a>
		</li>
	{/each}
</ul>
