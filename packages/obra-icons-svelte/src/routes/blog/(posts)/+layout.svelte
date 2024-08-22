<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	export let data;
</script>

<article class="container">

	<header>
		<p class="back-link">
			<a href="/blog">&larr; Back to blog</a>
		</p>

		<h1>{data.title}</h1>
		<p>{formatDate(data.date)}</p>
	
		{#if data.tags}
		<p>
			<span class="tag">{data.tags}</span>
		</p>
		{/if}
			
	</header>

	<div class="content">

		<slot />
	</div>
</article>

<style>

	.container {
		max-width: 700px;
		margin: 2rem auto;
	}

	.tag {
		background-color: #666;
		color: #FFF;
		font-size: 0.8rem;
		padding: 0.25rem 0.5rem;
		border-radius: 15px;
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
		background-color: #FFF;
		border-radius: 15px;
	}

	.back-link a:hover {
		color: #000;
		background-color: #EEE;;
	}

</style>