<script>
	import * as icons from '$package';
	export let size = '24';
	export let weight = 1.5;
	export let color = '#FF0000';
</script>

<svelte:head>
	<title>Test - Obra Icons</title>
</svelte:head>

<div class="controls">
	<div class="control-group">
		<label>Color</label><input type="color" bind:value={color} />
		{color}
	</div>

	<div class="control-group">
		<label>Size</label><input
			type="range"
			bind:value={size}
			min="16"
			step="4"
			max="96"
		/>
		{size}
	</div>

	<div class="control-group">
		<label>Weight</label><input
			type="range"
			bind:value={weight}
			min=".5"
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
		background: red;
		position: sticky;
		top: 0;
	}
</style>
