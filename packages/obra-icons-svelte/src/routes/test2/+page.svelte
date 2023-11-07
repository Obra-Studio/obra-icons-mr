<script>
	import * as icons from '$package';
	export let size = '24';
	export let weight = 2;
	export let color = '#000000';
</script>

<svelte:head>
	<title>Test - Obra Icons</title>
</svelte:head>

<div class="controls">
	<div class="control-group">
		<label for="color">Color</label>
		<input id="color" type="color" bind:value={color} />
		{color}
	</div>

	<div class="control-group">
		<label for="size">Size</label>
		<input
			id="size"
			type="range"
			bind:value={size}
			min="16"
			step="4"
			max="64"
		/>
		{size}
	</div>

	<div class="control-group">
		<label id="weight">Weight</label>
		<input
			id="weight"
			type="range"
			bind:value={weight}
			min="1"
			step=".5"
			max="2"
		/>
		{weight}
	</div>
</div>

<div class="padding-medium margin-0-auto">
	<div class="vertical-container-xx-large">
		<div class="grid">
			{#each Object.values(icons) as component}
				<div class="icon-wrapper">
					<svelte:component
						this={component}
						{size}
						{color}
						strokeWidth={weight}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	label {
		font-weight: 600;
	}

	.controls {
		display: flex;
		padding: 16px;
		gap: 24px;
		justify-content: center;
		background: #000;
		color: #FFF;
		position: sticky;
		top: 0;
	}
</style>
