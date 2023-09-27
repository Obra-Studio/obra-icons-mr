<script lang="ts">
	import Footer from '$marketinglib/components/Footer.svelte';
	import Header from '$marketinglib/components/Header.svelte';
	import '$marketinglib/screen.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
