<script lang="ts">
	import * as iconMap from '$package/index';
	import { iconNameKebab } from './utils';
	import { search } from '@orama/orama';
	import iconsCount from '$lib/count';

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

		const result = await search(data.searchDb, {
			properties: ['nameKebab', 'keywords'],
			tolerance: 10,
			term: query,
			limit: 50,
			boost: {
				keywords: 2,
			},
		});

		console.log(result);

		icons = result.hits.map((hit) => hit.document.namePascal);
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

			<div class="vertical-container-x-large">
				<ul class="icon-grid">
					{#each icons as name (name)}
						{@const nameKebab = iconNameKebab(name)}

						<li class="icon-item">
							<svelte:component this={getIconComponent(name)} />

							<div class="overlay">
								<button class="button"> Download SVG </button>
								<button class="button"> Copy SVG </button>
								<button class="button"> Copy import </button>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	/* Icon grid
   ========================================================================== */

	.icon-grid {
		display: grid;
		gap: 1rem;

		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
	}

	.icon-grid li {
		border: 1px solid #ccc;
		padding: 1.5rem;
		text-align: center;
		border-radius: 3px;
	}

	@media (prefers-color-scheme: dark) {
		.responds-to-dark .icon-grid li {
			border-color: #555;
		}
	}

	/* Icon item
   ========================================================================== */

	.icon-item {
		position: relative;
		min-height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (prefers-color-scheme: dark) {
		.responds-to-dark .icon-item {
			color: #fff;
		}

		.responds-to-dark .icon-item :global(svg *) {
			stroke: #fff;
		}
	}

	.overlay {
		display: none;
	}

	.icon-item:hover .overlay {
		position: absolute;

		width: 100%;
		height: 100%;

		background: rgba(85, 85, 85, 0.2);
		backdrop-filter: blur(2px);

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		padding: 8px;
	}

	.overlay .button {
		cursor: pointer;
		width: 100%;
		padding: 12px;
		font-size: 80%;
	}
</style>
