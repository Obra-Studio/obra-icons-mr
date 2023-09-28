<script lang="ts">
	import { iconNameKebab } from './utils';
	import { search } from '@orama/orama';
	import * as iconMap from '$lib/index';

	const { IconSearch } = iconMap;

	export let data;

	let icons = Object.keys(iconMap);

	function getIconComponent(name: string) {
		return iconMap[name as keyof typeof iconMap];
	}

	async function find(query: string) {
		query = query.trim();

		//? Don't search if the query is empty
		if (query.length == 0) {
			icons = Object.keys(iconMap);
			return;
		}

		const result = await search(data.searchEngine, {
			properties: ['name', 'keywords'],
			tolerance: 1,
			term: query,
			limit: 50,
		});

		icons = result.hits.map((hit) => hit.document.componentName);
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
					placeholder="Search {icons.length} Obra Icons and Obra Plus Icons..."
					type="text"
				/>

				<IconSearch />
			</div>

			<div class="vertical-container-x-large">
				<ul class="icon-grid">
					{#each icons as name (name)}
						{@const nameKebab = iconNameKebab(name)}

						<li class="icon-item">
							<!-- Want to render the icon here e.g. <svelte:component this={icon} />-->
							<!-- {transformIconString(icon)} -->
							<svelte:component this={getIconComponent(name)} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
