<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	export let data;
</script>

<a href="/blog">Back to blog</a>

<h1>{data.title}</h1>
<p>{formatDate(data.date)}</p>


<hr />

<slot />
