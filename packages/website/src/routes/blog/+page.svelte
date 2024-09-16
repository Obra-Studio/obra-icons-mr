<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';
	import { IconRss } from 'obra-icons-svelte';

	export let data;
</script>

<svelte:head>
	<link
		href="/rss.xml"
		rel="alternate"
		title="RSS Feed for Obra Icons Blog"
		type="application/rss+xml"
	/>
	<title>Blog - Obra Icons</title>
</svelte:head>

<div class="container padding-medium margin-0-auto">
	<div class="blog-header">
		<h1 class="blog-title">Blog</h1>

		<a aria-label="RSS Feed" class="rss" href="/rss.xml">
			<IconRss size={16} strokeWidth={3} />
			RSS feed
		</a>
	</div>

	<ul>
		{#each data.posts as post}
			<li>
				<article class="blog-post">
					<header style="margin: 0 0 2rem;">
						<h2>
							<a href="/blog/{post.slug}">{post.title}</a>
						</h2>
						<p class="date">{formatDate(post.date)}</p>
						{#if post.tags}
							<p>
								<span class="tag">{post.tags}</span>
							</p>
						{/if}
					</header>
					<div class="content">
						{@html post.content}
					</div>
				</article>
			</li>
		{/each}
	</ul>
</div>

<style>
	.blog-header {
		margin-bottom: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.rss {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: #000;
	}

	.blog-post {
		margin-bottom: 4rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #eee;
		max-width: 700px;
		margin: 0 auto;
	}

	.blog-post:last-child {
		border-bottom: none;
	}

	h2 {
		margin-bottom: 0.5rem;
	}

	h2 a {
		text-decoration: none;
		color: inherit;
	}

	h2 a:hover {
		text-decoration: underline;
	}

	.date {
		color: #999;
		margin-bottom: 1rem;
	}
</style>
