<script lang="ts">
	import type { NamedIcon } from './icons';

	let { entry, weightIndex }: { entry: NamedIcon; weightIndex?: number } =
		$props();

	const unit = 18; // px per grid unit
	const gridUnits = 24;
	const gridSize = unit * gridUnits; // 432
	const majorEvery = 4;
	const safeInset = 2; // units
	const weights = [1, 1.5, 2];
	// A single weight, isolated for its own screenshot, when the caller (the
	// screenshot tool's ?weight= query param) asks for one instead of all three.
	const activeWeights =
		weightIndex !== undefined ? [weights[weightIndex]] : weights;

	const minorTicks = Array.from(
		{ length: gridUnits + 1 },
		(_, i) => i * unit,
	);
	const majorTicks = Array.from(
		{ length: gridUnits / majorEvery + 1 },
		(_, i) => i * majorEvery * unit,
	);

	const safeZoneInset = safeInset * unit;
	const safeZoneSize = gridSize - safeZoneInset * 2;
	const center = gridSize / 2;
</script>

<div class="artboard" id="artboard-zoom">
	<div class="stage">
		{#each activeWeights as weight (weight)}
			<div
				class="grid-box"
				style={`width: ${gridSize}px; height: ${gridSize}px;`}
			>
				<!-- Grid lines and construction guides are drawn together in a single
					 SVG so they share one rendering pass and stay pixel-aligned with
					 each other. -->
				<svg
					class="grid-guides"
					width={gridSize}
					height={gridSize}
					viewBox={`0 0 ${gridSize} ${gridSize}`}
					shape-rendering="crispEdges"
				>
					{#each minorTicks as t (t)}
						<line
							x1={t}
							y1="0"
							x2={t}
							y2={gridSize}
							stroke="var(--oi-grid-minor)"
							stroke-width="1"
						/>
						<line
							x1="0"
							y1={t}
							x2={gridSize}
							y2={t}
							stroke="var(--oi-grid-minor)"
							stroke-width="1"
						/>
					{/each}
					{#each majorTicks as t (t)}
						<line
							x1={t}
							y1="0"
							x2={t}
							y2={gridSize}
							stroke="var(--oi-grid-major)"
							stroke-width="1.5"
						/>
						<line
							x1="0"
							y1={t}
							x2={gridSize}
							y2={t}
							stroke="var(--oi-grid-major)"
							stroke-width="1.5"
						/>
					{/each}
					<line
						x1="0"
						y1={center}
						x2={gridSize}
						y2={center}
						stroke="var(--oi-guide-accent-soft)"
						stroke-width="1"
					/>
					<line
						x1={center}
						y1="0"
						x2={center}
						y2={gridSize}
						stroke="var(--oi-guide-accent-soft)"
						stroke-width="1"
					/>
					<circle
						cx={center}
						cy={center}
						r={safeZoneSize / 2}
						fill="none"
						stroke="var(--oi-guide-accent)"
						stroke-width="1.5"
						stroke-dasharray="6 3"
						shape-rendering="geometricPrecision"
					/>
					<rect
						x={safeZoneInset}
						y={safeZoneInset}
						width={safeZoneSize}
						height={safeZoneSize}
						fill="none"
						stroke="var(--oi-safe-zone)"
						stroke-width="1.5"
						stroke-dasharray="6 3"
					/>
				</svg>

				<div class="icon-holder">
					<entry.Icon
						size={gridSize}
						strokeWidth={weight}
						color="currentColor"
					/>
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
		flex-direction: column;
		padding: 80px;
		overflow: hidden;
	}

	.stage {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 88px;
	}

	.grid-box {
		position: relative;
		background-color: var(--oi-grid-bg);
		border: 1px solid var(--oi-grid-border);
	}

	.grid-guides {
		position: absolute;
		inset: 0;
		display: block;
	}

	.icon-holder {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--oi-ink);
	}

	.icon-holder :global(svg) {
		display: block;
	}
</style>
