<script lang="ts">
	export let href: string;
	export let active: boolean = false;
</script>

<a {href} aria-current={active} class="nav-item">
	<slot />
</a>

<style>
	.nav-item {
		text-decoration: none;
		display: inline-block;
		padding: 0.5rem 0.75rem;
		border-radius: var(--border-radius-tiny);
	}

	.nav-item:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.nav-item[aria-current='true'] {
		background: rgba(255, 255, 255, 0.2);
	}
</style>
