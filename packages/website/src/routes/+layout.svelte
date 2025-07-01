<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { Snippet } from 'svelte';
	import '$lib/screen.css';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />
