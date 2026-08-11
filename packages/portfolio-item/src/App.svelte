<script lang="ts">
	import { IconMoon, IconSun } from 'obra-icons-svelte';
	import IconComposition from './lib/IconComposition.svelte';
	import IconZoom from './lib/IconZoom.svelte';
	import IconComparison from './lib/IconComparison.svelte';
	import { zoomIcons } from './lib/icons';
	import { compositionVariants } from './lib/composition-variants';

	const views = [
		{ id: 'composition', label: '01 · Composition' },
		{ id: 'zoom', label: '02 · Weights' },
		{ id: 'comparison', label: '03 · Filled vs. outline' },
	] as const;

	// Query params let a headless screenshot tool deep-link straight into any
	// view/theme/variant without clicking through the UI, e.g.
	// ?view=composition&variant=1&theme=dark
	const params = new URLSearchParams(window.location.search);
	const viewIds = views.map((v) => v.id) as string[];
	const viewParam = params.get('view');

	let view: (typeof views)[number]['id'] = $state(
		viewIds.includes(viewParam ?? '')
			? (viewParam as (typeof views)[number]['id'])
			: 'composition',
	);
	let dark = $state(params.get('theme') === 'dark');

	const variantParam = Number(params.get('variant'));
	let compositionVariantIndex = $state(
		Number.isInteger(variantParam) && compositionVariants[variantParam]
			? variantParam
			: 0,
	);

	const defaultZoomIndex = Math.max(
		zoomIcons.findIndex(
			(entry) => entry.name === (params.get('icon') || 'Home'),
		),
		0,
	);
	let zoomIndex = $state(defaultZoomIndex);

	let zoomEntry = $derived(zoomIcons[zoomIndex]);

	// ?weight=0|1|2 isolates a single weight box for its own screenshot;
	// omitted (the interactive default) shows all three side by side. Number(null)
	// is 0 (a valid index!), so absence has to be checked before parsing.
	const rawWeightParam = params.get('weight');
	const weightParam = rawWeightParam === null ? NaN : Number(rawWeightParam);
	const zoomWeightIndex =
		Number.isInteger(weightParam) && weightParam >= 0 && weightParam <= 2
			? weightParam
			: undefined;
</script>

<div class="page" class:dark>
	<header class="toolbar">
		<div class="brand">Obra Icons — Portfolio</div>
		<div class="toolbar-right">
			<nav class="tabs">
				{#each views as tab (tab.id)}
					<button
						class="tab"
						class:active={view === tab.id}
						onclick={() => (view = tab.id)}
					>
						{tab.label}
					</button>
				{/each}
			</nav>
			<button
				class="theme-toggle"
				onclick={() => (dark = !dark)}
				aria-label="Toggle dark mode"
			>
				{#if dark}
					<IconSun size={16} strokeWidth={2} />
				{:else}
					<IconMoon size={16} strokeWidth={2} />
				{/if}
				{dark ? 'Light' : 'Dark'}
			</button>
		</div>
	</header>

	<div class="controls">
		{#if view === 'composition'}
			<label class="control">
				Variant
				<select
					name="composition-variant"
					bind:value={compositionVariantIndex}
				>
					{#each compositionVariants as variant, i (variant.name)}
						<option value={i}>{variant.name}</option>
					{/each}
				</select>
			</label>
		{:else if view === 'zoom'}
			<label class="control">
				Icon
				<select name="zoom-icon" bind:value={zoomIndex}>
					{#each zoomIcons as entry, i (entry.name)}
						<option value={i}>{entry.name}</option>
					{/each}
				</select>
			</label>
		{/if}
	</div>

	<main class="mat">
		{#if view === 'composition'}
			<IconComposition
				icons={compositionVariants[compositionVariantIndex].icons}
			/>
		{:else if view === 'zoom'}
			<IconZoom entry={zoomEntry} weightIndex={zoomWeightIndex} />
		{:else}
			<IconComparison />
		{/if}
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--oi-page-bg);
		color: var(--oi-ink);
	}

	.page.dark {
		--oi-page-bg: #161616;
		--oi-toolbar-text: #cfcfca;
		--oi-tabs-bg: #2a2a2a;
		--oi-tab-text: #9a9a92;
		--oi-tab-hover-text: #f5f5f2;
		--oi-tab-active-bg: #f5f5f2;
		--oi-tab-active-text: #0a0a0a;
		--oi-control-text: #9a9a92;
		--oi-select-border: #3a3a3a;
		--oi-select-bg: #1f1f1f;
		--oi-select-text: #f2f2ee;
		--oi-shadow: rgba(0, 0, 0, 0.6);

		--oi-surface: #121212;
		--oi-surface-border: #2c2c2c;
		--oi-ink: #f2f2ee;
		--oi-muted: #8f8f88;
		--oi-label: #b7b7ae;
		--oi-hairline: #292929;
		--oi-hairline-soft: #232323;
		--oi-grid-bg: #1a1a1a;
		--oi-grid-border: #333333;
		--oi-grid-major: #333333;
		--oi-grid-minor: #242424;
		--oi-safe-zone: #3d3d3d;
		--oi-guide-accent: rgba(120, 150, 255, 0.6);
		--oi-guide-accent-soft: rgba(120, 150, 255, 0.4);
	}

	.toolbar {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 32px;
		gap: 24px;
		flex-wrap: wrap;
	}

	.brand {
		font-weight: 600;
		font-size: 14px;
		color: var(--oi-toolbar-text);
	}

	.toolbar-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.tabs {
		display: flex;
		gap: 6px;
		background: var(--oi-tabs-bg);
		padding: 4px;
		border-radius: 999px;
	}

	.tab {
		border: none;
		background: transparent;
		padding: 8px 16px;
		border-radius: 999px;
		font-size: 13px;
		font-weight: 600;
		color: var(--oi-tab-text);
		cursor: pointer;
		transition:
			background 0.15s ease,
			color 0.15s ease;
	}

	.tab:hover {
		color: var(--oi-tab-hover-text);
	}

	.tab.active {
		background: var(--oi-tab-active-bg);
		color: var(--oi-tab-active-text);
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		gap: 8px;
		border: 1px solid var(--oi-select-border);
		background: var(--oi-select-bg);
		color: var(--oi-select-text);
		padding: 8px 14px;
		border-radius: 999px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
	}

	.controls {
		min-height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	.control {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 13px;
		font-weight: 600;
		color: var(--oi-control-text);
	}

	.control select {
		border: 1px solid var(--oi-select-border);
		background: var(--oi-select-bg);
		border-radius: 6px;
		padding: 6px 10px;
		font-size: 13px;
		color: var(--oi-select-text);
	}

	.mat {
		flex: 1;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px 24px 64px;
		overflow: auto;
	}

	.mat :global(.artboard) {
		box-shadow: 0 30px 60px -20px var(--oi-shadow);
		flex-shrink: 0;
	}
</style>
