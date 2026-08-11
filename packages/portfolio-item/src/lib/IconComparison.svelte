<script lang="ts">
	import { iconPairs } from './icon-pairs';

	const cols = 4;
	const rows = 2;
	const pairs = iconPairs.slice(0, cols * rows);
</script>

<div class="artboard" id="artboard-comparison">
	<div
		class="stage"
		style={`grid-template-columns: repeat(${cols}, max-content); grid-template-rows: repeat(${rows}, max-content);`}
	>
		{#each pairs as pair (pair.name)}
			<div class="pair-card">
				<div class="icon-slot">
					<pair.outline
						size={88}
						strokeWidth={1.4}
						color="currentColor"
					/>
				</div>
				<div class="icon-slot">
					<pair.filled size={88} color="currentColor" />
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.artboard {
		width: 1600px;
		height: 900px;
		background: var(--oi-surface);
		border: 1px solid var(--oi-surface-border);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 100px;
		overflow: hidden;
	}

	.stage {
		display: grid;
		gap: 64px 96px;
	}

	.pair-card {
		display: flex;
		align-items: center;
		gap: 28px;
		color: var(--oi-ink);
	}

	.icon-slot {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-slot :global(svg) {
		display: block;
	}
</style>
