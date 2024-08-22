<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	export let data;
</script>



<div class="container padding-medium margin-0-auto">

	<h1 class="blog-title">Blog</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<article class="blog-post">
					<h2><a href="/blog/{post.slug}">{post.title}</a></h2>
					<p class="date">{formatDate(post.date)}</p>
					<div class="content">
						{@html post.content}
					</div>
				</article>
			</li>
		{/each}
	</ul>
</div>

<style>

	.blog-title {
		margin-bottom: 2rem;
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