<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	export let data;
</script>

<svelte:head>
	<link
		href="/rss.xml"
		rel="alternate"
		title="RSS Feed for Obra Icons Blog"
		type="application/rss+xml"
	/>
	<title>{data.title} - Blog - Obra Icons</title>
</svelte:head>

<div class="container">
	<p class="back-link">
		<a href="/blog">&larr; Back to overview</a>
	</p>

	<article class="blog-post">
		<header>
			<h1>
				{data.title}
			</h1>
			<ul class="meta">
				<li class="date">{formatDate(data.date)}</li>
				{#if data.tags}
					<li>
						<ul class="tag-list">
							{#each data.tags as tag}
								<li>
									<span class="tag">{tag}</span>
								</li>
							{/each}
						</ul>
					</li>
				{/if}
			</ul>
		</header>
		<div class="content">
			{@html data.content}
		</div>
	</article>
</div>

<style>
	.container {
		max-width: 700px;
		margin: 2rem auto;
	}

	h1 {
		font-size: 1.75rem;
		margin-bottom: 0.5rem;
	}

	header {
		margin-bottom: 2rem;
	}

	.back-link {
		margin-bottom: 1rem;
	}

	.back-link a {
		color: #666;
		text-decoration: none;
		padding: 0.5rem;
		background-color: #fff;
		border-radius: 15px;
	}

	.back-link a:hover {
		color: #000;
		background-color: #eee;
	}
</style>
