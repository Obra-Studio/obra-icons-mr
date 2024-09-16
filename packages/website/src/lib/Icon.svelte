<script lang="ts">
	import { copyToClipboard, copyPngToClipboard, downloadIcon } from './clipboardAndDownloadUtils';
	import Toast from '$lib/components/Toast.svelte';

	export let svg: string;
	export let nameKebab: string;
	export let namePascal: string;
	export let size: number;

	type ActionType = 'downloadSvg' | 'downloadPng' | 'copySvelteImport' | 'copySvg' | 'copyPng';
	export let selectedAction: ActionType;

	let toastMessage: string | null = null;

	async function executeChosenAction(selectedAction: ActionType) {
		try {
			if (selectedAction == 'downloadSvg') {
				await downloadIcon(nameKebab, svg, 'svg');
				toastMessage = 'Downloaded SVG!';
			} else if (selectedAction == 'downloadPng') {
				await downloadIcon(nameKebab, svg, 'png');
				toastMessage = 'Downloaded PNG!';
			} else if (selectedAction == 'copySvelteImport') {
				await copyToClipboard(`import { ${namePascal} } from 'obra-icons-svelte'`);
				toastMessage = 'Copied Svelte import!';
			} else if (selectedAction == 'copySvg') {
				await copyToClipboard(svg);
				toastMessage = 'Copied SVG!';
			} else if (selectedAction == 'copyPng') {
				await copyPngToClipboard(svg);
				toastMessage = 'Copied PNG to clipboard!';
			}
		} catch (error) {
			console.error('Action failed:', error);
			toastMessage = 'Action failed';
		}
	}
</script>

<li class="icon-item">
	<button on:click={() => executeChosenAction(selectedAction)} class="icon">
		<div class="svg-holder" style="width: {size}px; height: {size}px">
			{@html svg}
		</div>
	</button>

	<span class="icon-name">{nameKebab}</span>
</li>

<Toast message={toastMessage} />

<style>

	.icon {
		appearance: none;
		border: none;
		border-radius: 15px;
		background: none;
		padding: 1.5rem;
	}

	.icon:hover {
		background: rgba(0,0,0,0.1);
	}

    @media (prefers-color-scheme: dark) {
        .icon:hover {
            background: rgba(255,255,255,0.1);
        }
    }


	.icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.icon-name {
		display: block;
		font-size: 80%;
		color: #808080;
	}

	.icon-item {
		position: relative;

		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
		justify-content: flex-start;

		padding: 1rem;
		text-align: center;
		border-radius: 15px;
	}

	@media (prefers-color-scheme: dark) {
		.icon-item {
			border-color: #555;
			color: #FFF;
		}

		.icon-item :global(svg .oi-fill) {
			fill: #fff;
			stroke: none;
		}

		.icon-item :global(svg *) {
			stroke: #fff;
		}
	}



</style>
