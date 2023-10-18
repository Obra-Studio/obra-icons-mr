<script>
	import { IconAdd } from '$package';
</script>

<svelte:head>
	<title>Test - Obra Icons</title>
</svelte:head>

<div class="padding-medium margin-0-auto">
	<div class="vertical-container-xx-large">
		<div class="grid">
			<IconAdd />
			<IconAdd size={64} />
			<IconAdd color="red" />
			<IconAdd color="red" size={64} strokeWidth="4" />
		</div>
	</div>
</div>

<style>
	.grid {
		display: flex;
		flex-wrap: wrap;
	}
</style>
