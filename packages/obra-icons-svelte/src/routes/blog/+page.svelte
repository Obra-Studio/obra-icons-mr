<script lang="ts">
	export let data;
</script>

<ul>
	{#each data.posts as post}
		<li>
			<a href="/blog/{post.slug}">
				{post.title}
			</a>
		</li>
	{/each}
</ul>
