<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import GlobalBanner from '$lib/components/GlobalBanner.svelte';
	import '$lib/screen.css';
</script>

<GlobalBanner />

<Header />

<main>
	<slot />
</main>

<Footer />
