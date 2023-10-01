<script lang="ts">
	import { IconSearch } from '$package/index';
	import { dev } from '$app/environment';
	import { search } from '@orama/orama';
	import iconsCount from '$lib/count';
	import { getSvg } from '$lib/svgs';

	import Icon from './Icon.svelte';

	export let data;

	let icons = data.defaultSearch;

	async function find(query: string) {
		query = query.trim();

		//? Don't search if the query is empty
		if (query.length == 0) {
			icons = data.defaultSearch;
			return;
		}

		icons = await search(data.searchDb, {
			properties: ['nameKebab', 'keywords'],
			tolerance: 10,
			term: query,
			limit: 50,
			boost: {
				keywords: 2,
			},
		});
	}
</script>

<svelte:head>
	<title>Icons - Obra Icons</title>
</svelte:head>

<div class="responds-to-dark">
	<div class="bg-dark-grey">
		<div class="container padding-medium margin-0-auto">
			<div class="input-with-icon">
				<input
					on:input={(e) => find(e.currentTarget.value)}
					placeholder="Search {iconsCount} Obra Icons and Obra Plus Icons..."
					type="text"
				/>

				<IconSearch />
			</div>

			{#if dev}
				<!--				<p>Found {icons.hits.length} icons</p>-->
			{/if}

			<div class="vertical-container-x-large">
				<ul class="icon-grid">
					{#each icons.hits as { document } (document.nameKebab)}
						{@const svg = getSvg(document.nameKebab)}
						<Icon
							{svg}
							nameKebab={document.nameKebab}
							namePascal={document.namePascal}
						/>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.icon-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
	}
</style>
