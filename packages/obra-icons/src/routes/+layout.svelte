<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import '$lib/screen.css';
</script>

<Header />

<main>
    <slot />
</main>

<Footer />
