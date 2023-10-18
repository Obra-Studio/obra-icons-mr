<script>
	import * as icons from '$package';
	export let size = '24';
	export let weight = 1;
</script>

<svelte:head>
	<title>Test - Obra Icons</title>
</svelte:head>

<div class="padding-medium margin-0-auto">
	<div class="vertical-container-xx-large">
		<div class="grid">
			{#each Object.values(icons) as component}
				<div class="icon-wrapper">
					<svelte:component
						this={component}
						size={32}
						color="red"
						strokeWidth={1}
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
	}
</style>
