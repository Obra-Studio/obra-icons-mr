<script lang="ts">
	import type { NamedIcon } from './icons';

	let { icons }: { icons: NamedIcon[] } = $props();

	const cols = 10;
	const rows = 5;
</script>

<div class="artboard" id="artboard-composition">
	<div
		class="grid"
		style={`grid-template-columns: repeat(${cols}, 104px); grid-template-rows: repeat(${rows}, 104px);`}
	>
		{#each icons as item (item.name)}
			<div class="cell">
				<item.Icon size={44} strokeWidth={1.75} color="currentColor" />
			</div>
		{/each}
	</div>
</div>

<style>
	.artboard {
		width: 1600px;
		height: 1000px;
		background: var(--oi-surface);
		border: 1px solid var(--oi-surface-border);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 96px;
		overflow: hidden;
	}

	.grid {
		display: grid;
		gap: 28px;
		color: var(--oi-ink);
	}

	.cell {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cell :global(svg) {
		display: block;
	}
</style>
