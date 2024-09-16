<!-- Toast.svelte -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	export let message: string | null = null;
	export let duration: number = 2000;

	let visible = false;
	let timeout: ReturnType<typeof setTimeout>;

	$: if (message) {
		showToast();
	}

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