<script lang="ts">
	import { IconArrowRight } from '$package';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import iconsCount from '$lib/count';

	import { IconSearch } from '$package/index';
	import { dev } from '$app/environment';
	import { search } from '@orama/orama';
	import { getSvg } from '$lib/svgs';

	import Icon from '$lib/Icon.svelte';
	import { page } from '$app/stores';

	export let data;

	let icons = data.defaultSearch;

	let searching = false;
	let query: string = '';
	let lastQuery: string = query;

	let color = '#000'
	let strokeWeight = 1.5
	let size = 36

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

		icons =  query.length == 0 ? data.defaultSearch : await search(data.searchDb, {
			term: currentQuery,
			properties: ['nameKebab', 'keywords'],
			tolerance: 10,
			limit: 50,
			boost: {
			keywords: 2,
		},
	});

		lastQuery = currentQuery;
		searching = false;
		sc--;

		if (currentQuery != query) {
		find();
	}
	}


</script>

<svelte:head>
	<title>Home - Obra Icons</title>
</svelte:head>

<div class="is-dark">
	<div class="bg-black">
		<div class="container padding-medium margin-0-auto">
			<div class="vertical-container-x-large">
				<div class="hero">
					<h2 class="text-align-center">
						A simple, consistent set of icons, perfect for user
						interfaces.
					</h2>

					<div class="justify-content-center button-group">
						<a
							class="button inverse"
							href="https://sowl.co/s/bdgsNv"
						>
							<span>Buy source ($20)</span>
							<IconArrowRight />
						</a>
						<a
								href="https://github.com/Obra-Studio/obra-icons-svelte"
								class="button inverse"
						>
							<span class="icon-fill-wrapper">
								<GithubIcon />
							</span>
							<span>Svelte package</span>
							<IconArrowRight />
						</a>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="responds-to-dark">
	<div class="bg-dark-grey">
		<div class="controls">
			<div class="input-with-icon">
				<input
					on:input={input}
					placeholder="Search {iconsCount} icons for free..."
					type="text"
				/>
				<IconSearch />
			</div>
			<div class="inner-controls">
				<div class="control-group">
					<label for="weight">Weight</label>
					<input
						id="weight"
						type="range"
						bind:value={strokeWeight}
						min="1"
						step=".5"
						max="2"
					/>
					<span class="count stroke-weight">{strokeWeight}</span>
				</div>
				<div class="control-group">
					<label for="color">Color</label>
					<input
						id="color"
						type="color"
						bind:value={color}
					/>
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
					<span class="count">{size}</span>
				</div>
			</div>
		</div>

		{#if dev && $page.url.searchParams.has('debug')}
			<p>Found {icons.hits.length} icons</p>
			<p>Query: "{query}"</p>
			<p>LQuery: "{lastQuery}"</p>
			<p>Searching: {searching}</p>
			<p>SC: {sc}</p>
		{/if}

		{#if icons.hits}
			<ul class="icon-grid">
				{#each icons.hits as { document } (document.nameKebab)}
					{@const svg = getSvg(document.nameKebab, strokeWeight, color)}
					<Icon
						{svg}
						color={color}
						strokeWeight={strokeWeight}
						size={size}
						nameKebab={document.nameKebab}
						namePascal={document.namePascal}
					/>
				{/each}
			</ul>
		{:else}
			<p class="text-align-center">No results found.</p>
		{/if}
	</div>
</div>

<style>

    input[type='range']{
		accent-color: #000;
	}

    @media (prefers-color-scheme: dark) {
        input[type='range'] {
			accent-color: #FFF;
		}
	}

    .controls {
        position: sticky;
        padding: 1rem;
        background: #FFF;
        z-index: 1;
        top: 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    @media (prefers-color-scheme: dark) {
        .controls {
            background: #222;
            border-bottom: 1px solid rgba(255,255,255,0.2);
        }
    }
    @media (max-width: 960px) {
        .controls {
            margin: 0 0 0;
        }
    }

    @media (min-width: 960px) {
        .controls {
            display: flex;
            gap: 24px;
            justify-content: center;
        }
    }

    label {
        font-weight: 600;
    }

    @media (prefers-color-scheme: dark) {
        label, .count {
            color: #FFF;
        }
    }

    .inner-controls {
        margin: 1.5rem 0 0;
		display: flex;
		gap: 1.5rem;
		justify-content: center;
	}

    @media (max-width: 960px) {
        .inner-controls input {
            width: 100%;
        }
    }

    @media (min-width: 960px) {
		.inner-controls {
            margin: 0;
        }
	}

	.control-group {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.stroke-weight {
		width: 30px;
	}

    .icon-grid {
        display: grid;
        gap: 1rem;
		margin: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
    }

</style>
