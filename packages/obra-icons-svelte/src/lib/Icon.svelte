<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	import { copy } from 'svelte-copy';

	export let svg: string;
	export let nameKebab: string;
	export let namePascal: string;
	export let size: number;
	export let strokeWeight: number;

	type ActionType = 'downloadSvg' | 'downloadPng' | 'copySvelteImport' | 'copySvg';
	export let selectedAction: ActionType;

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text).then(() => {
			showToast('Copied!');
		}, (err) => {
			console.error('Could not copy text: ', err);
			showToast('Failed to copy');
		});
	}

	function executeChosenAction(selectedAction: ActionType) {
		if (selectedAction == 'downloadSvg') {
			console.log('Download da svg');
			downloadIcon(nameKebab, svg, 'svg');
		} else if (selectedAction == 'downloadPng') {
			console.log('Download da png');
			downloadIcon(nameKebab, svg, 'png');
		} else if (selectedAction == 'copySvelteImport') {
			console.log('copy paste da svelte import');
			copyToClipboard(`import { ${namePascal} } from 'obra-icons-svelte'`);
		} else if (selectedAction == 'copySvg') {
			copyToClipboard(svg);
		}
	}

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

	async function downloadIcon(name: string, svgData: string, format: 'svg' | 'png') {
    if (format === 'svg') {
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${name}.svg`;
        anchor.click();
        window.URL.revokeObjectURL(url);
    } else if (format === 'png') {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                const url = window.URL.createObjectURL(blob);
                const anchor = document.createElement('a');
                anchor.href = url;
                anchor.download = `${name}.png`;
                anchor.click();
                window.URL.revokeObjectURL(url);
            }, 'image/png');
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
    showToast(`Downloaded ${format.toUpperCase()}!`);
}
</script>

<li class="icon-item">
	<button
		on:click={executeChosenAction(selectedAction)}
		class="icon"

	>
		<div class="svg-holder" style="width: {size}px; height: {size}px">
			{@html svg}
		</div>
	</button>

	<span class="icon-name">{nameKebab}</span>

</li>

{#if toast}
	<div transition:fade class="toast">
		<p>{toast}</p>
	</div>
{/if}

<style>

	.icon {
		appearance: none;
		border: none;
		padding: 0;
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
		gap: 4px;

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
