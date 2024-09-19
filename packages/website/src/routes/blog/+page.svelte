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
					<header>
						<h2>
							<a href="/blog/{post.slug}">{post.title}</a>
						</h2>
						<ul class="meta">
							<li class="date">{formatDate(post.date)}</li>
							{#if post.tags}
								<li>
									<ul class="tag-list">
										{#each post.tags as tag}
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
						{@html post.content}
					</div>
				</article>
			</li>
		{/each}
	</ul>
</div>
