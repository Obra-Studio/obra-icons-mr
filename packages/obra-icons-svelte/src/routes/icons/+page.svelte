<script lang="ts">
	import { IconSearch } from '$package/index';
	import { dev } from '$app/environment';
	import { search } from '@orama/orama';
	import iconsCount from '$lib/count';
	import { getSvg } from '$lib/svgs';

	import Icon from './Icon.svelte';
	import { page } from '$app/stores';

	export let data;

	let icons = data.defaultSearch;

	let searching = false;
	let query: string = '';
	let lastQuery: string = query;

	function input(event: { currentTarget: HTMLInputElement }) {
		query = event.currentTarget.value.trim();

		if (query != lastQuery) {
			console.log(`trying to search for "${query}"`);
			find();
		} else {
			console.log(
				`not repeating same search - q: "${query}" lq: "${lastQuery}"`,
			);
		}
	}

	let sc = 0;

	async function find() {
		if (searching) return;

		const currentQuery = query;
		console.debug(`searching for "${currentQuery}"`);

		sc++;
		searching = true;

		icons =
			query.length == 0
				? data.defaultSearch
				: await search(data.searchDb, {
						term: currentQuery,
						properties: ['nameKebab', 'keywords'],
						tolerance: 10,
						limit: 50,
						boost: {
							keywords: 2,
						},
				  });

		// await new Promise((resolve) => setTimeout(resolve, 1000));

		lastQuery = currentQuery;
		searching = false;
		sc--;

		if (currentQuery != query) {
			find();
		}
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
					on:input={input}
					placeholder="Search {iconsCount} Obra Icons..."
					type="text"
				/>

				<IconSearch />
			</div>

			{#if dev || $page.url.searchParams.has('debug')}
				<p>Found {icons.hits.length} icons</p>
				<p>Query: "{query}"</p>
				<p>LQuery: "{lastQuery}"</p>
				<p>Searching: {searching}</p>
				<p>SC: {sc}</p>
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
					{:else}
						<p class="text-align-center">No results found.</p>
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

	p {
		color: #ffffff;
	}
</style>
