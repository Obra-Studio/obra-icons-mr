<script lang="ts">
	import { onDestroy, untrack } from 'svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		message?: string | null;
		duration?: number;
	}

	let { message = null, duration = 2000 }: Props = $props();

	let visible = $state(false);
	let timeout: ReturnType<typeof setTimeout>;

	function showToast() {
		visible = true;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			visible = false;
		}, duration);
	}

	onDestroy(() => {
		clearTimeout(timeout);
	});

	$effect(() => {
		if (message) {
			untrack(() => showToast());
		}
	});
</script>

{#if visible && message}
	<div transition:fade class="toast">
		<p>{message}</p>
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		bottom: 12px;
		left: 50%;
		z-index: 3000;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px 24px;
		border-radius: 4px;
		color: #fff;
		background: rgba(0, 0, 0, 0.85);
		pointer-events: none;
	}
</style>
