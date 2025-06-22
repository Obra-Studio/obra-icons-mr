<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		active?: boolean;
		children: Snippet;
		onclick?: () => void;
	}

	let { href, active = false, children, onclick }: Props = $props();
</script>

<a {href} aria-current={active} class="nav-item" {onclick}>
	{@render children()}
</a>

<style>
	.nav-item {
		text-decoration: none;
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 1.5rem;
	}

	.nav-item:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.nav-item[aria-current='true'] {
		background: rgba(255, 255, 255, 0.2);
	}
</style>
