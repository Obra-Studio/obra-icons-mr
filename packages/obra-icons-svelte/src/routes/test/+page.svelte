<script>
	import * as icons from '$package';
	export let size = '24';
	export let weight = 2;
</script>

<svelte:head>
	<title>Test - Obra Icons</title>
</svelte:head>

<div class="padding-medium margin-0-auto">
	<div class="vertical-container-xx-large">
		<div class="controls flex gap-medium margin-bottom-medium">
			<p>
				<label for="size">Size</label><input
					id="size"
					type="range"
					bind:value={size}
					min="16"
					step="4"
					max="96"
				/>
				{size}
			</p>
			<p>
				<label for="weight">Weight</label><input
					type="range"
					id="weight"
					bind:value={weight}
					min=".5"
					step=".5"
					max="2"
				/>
				{weight}
			</p>
		</div>

		<div class="grid">
			{#each Object.values(icons) as component}
				<div
					class="icon-wrapper"
					class:weight05={weight === 0.5}
					class:weight1={weight === 1}
					class:weight15={weight === 1.5}
					class:weight2={weight === 2}
					style="width: {size}px; height: {size}px;"
				>
					<svelte:component this={component} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>

	.controls {
		position: sticky;
		top: 0;
		background: #F0F0F0;
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
	}

	.icon-wrapper :global(svg) {
		width: 100%;
		height: 100%;
	}

	.icon-wrapper.weight1 :global(svg *) {
		stroke-width: 1px;
	}

	.icon-wrapper.weight2 :global(svg *) {
		stroke-width: 2px;
	}

	.icon-wrapper.weight15 :global(svg *) {
		stroke-width: 1.5px;
	}

	.icon-wrapper.weight05 :global(svg *) {
		stroke-width: 0.5px;
	}

</style>
