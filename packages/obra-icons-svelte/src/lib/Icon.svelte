<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	import { copy } from 'svelte-copy';

	export let svg: string;
	export let nameKebab: string;
	export let namePascal: string;
	export let size: number;
	export let strokeWeight: number;

	let timeout: ReturnType<typeof setTimeout>;
	let toast: string | null = null;

	function showToast(message: string) {
		toast = message;

		clearTimeout(timeout);

		timeout = setTimeout(() => {
			toast = null;
		}, 2000);
	}

	onDestroy(() => {
		clearTimeout(timeout);
	});

	function downloadSvg(name: string, svgData: string) {
		//? Create a blob with our svg
		const blob = new Blob([svgData], { type: 'image/svg+xml' });

		//? Make an anchor tag that points to the blob
		const anchor = document.createElement('a');
		anchor.href = window.URL.createObjectURL(blob);
		anchor.download = `${name}.svg`;

		//? Download
		anchor.click();

		showToast('Downloaded!');
	}

</script>

<li class="icon-item">
	<div
		class="icon"
		style="width: {size}px; height: {size}px"
	>
		{@html svg}
	</div>

	<span class="icon-name">{nameKebab}</span>

	<div class="overlay">
		<button class="button" on:click={() => downloadSvg(nameKebab, svg)}>
			Download SVG
		</button>

		<button
			class="button"
			use:copy={svg}
			on:svelte-copy={() => showToast('Copied!')}
		>
			Copy SVG
		</button>

		<button
			class="button"
			use:copy={`import { ${namePascal} } from 'obra-icons-svelte'`}
			on:svelte-copy={() => showToast('Copied!')}
		>
			Copy Svelte import
		</button>
	</div>

	{#if toast}
		<div transition:fade class="toast">
			<p>{toast}</p>
		</div>
	{/if}
</li>

<style>

	.icon {
		width: 36px;
		height: 36px;
	}

	.icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.icon-name {
		display: block;
		font-size: 80%;
	}

	.icon-item {
		position: relative;
		min-height: 140px;

		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
		justify-content: center;

		padding: 1.5rem;
		text-align: center;
		border-radius: 15px;
	}

	@media (prefers-color-scheme: dark) {
		.icon-item {
			border-color: #555;
			color: #FFF;
		}

		:global(svg *) {
			stroke: #fff;
			stroke-width: 1.5px;
		}

		.icon-item :global(svg .oi-fill) {
			fill: #fff;
			stroke: none;
		}

		.icon-item :global(svg *) {
			stroke: #fff;
		}
	}

	.overlay {
		display: none;
	}

	.icon-item:hover .overlay {
		position: absolute;

		width: 100%;
		height: 100%;

		background: rgba(85, 85, 85, 0.2);
		backdrop-filter: blur(2px);

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 8px;

		padding: 8px;
		border-radius: 12px;
	}

	.overlay .button {
		width: 100%;
		font-weight: 400;
		padding: 8px 12px;
		font-size: 80%;
	}

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
