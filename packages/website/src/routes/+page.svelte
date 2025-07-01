<script lang="ts">
	import { IconArrowRight, IconCaretDownFill } from 'obra-icons-svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import Icon, { type ActionType } from '$lib/Icon.svelte';
	import { iconSearch } from '$lib/icon-search.svelte';
	import iconsCount from '$lib/count';
	import { getSvg } from '$lib/svgs';

	let selectedActionOnClick = $state<ActionType>('copySvg');
	let strokeWeight = $state(1.5);
	let color = $state('#000000');
	let size = $state(36);
</script>

<svelte:head>
	<title>Home - Obra Icons</title>
</svelte:head>

<div class="is-dark">
	<div class="bg-black">
		<div class="container padding-medium margin-0-auto">
			<div class="vertical-container-large">
				<div class="hero">
					<h2 class="text-align-center">
						A simple, consistent set of icons, perfect for user
						interfaces.
					</h2>
					<p class="text-align-center">
						MIT licensed • {iconsCount} icons
					</p>

					<div class="justify-content-center button-group">
						<a
							class="button inverse"
							href="https://www.npmjs.com/package/obra-icons-svelte"
						>
							<span class="icon-fill-wrapper">
								<GithubIcon />
							</span>
							<span>Svelte package</span>
							<IconArrowRight />
						</a>
						<a
							class="button inverse"
							href="https://www.npmjs.com/package/obra-icons-react"
						>
							<span class="icon-fill-wrapper">
								<GithubIcon />
							</span>
							<span>React package</span>
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
			<SearchInput placeholder="Search icons..." />
			<div class="inner-controls">
				<div class="control-group">
					<label for="weight">Weight</label>
					<input
						bind:value={strokeWeight}
						id="weight"
						max="2"
						min="1"
						step=".5"
						type="range"
					/>
					<span class="count stroke-weight">{strokeWeight}</span>
				</div>
				<div class="control-group">
					<label for="size">Size</label>
					<input
						bind:value={size}
						id="size"
						max="128"
						min="16"
						step="4"
						type="range"
					/>
					<span class="count">{size}</span>
				</div>
				<div class="control-group">
					<label for="actionOnClick">Actionx</label>
					<div class="select-holder">
						<select
							bind:value={selectedActionOnClick}
							id="actionOnClick"
						>
							<option value="copySvg">Copy SVG</option>
							<option value="downloadSvg">Download SVG</option>
							<option value="copyPng">Copy PNG</option>
							<option value="downloadPng">Download PNG</option>
							<option value="copySvelteImport">
								Copy Svelte import
							</option>
							<option value="copyReactImport">
								Copy React import
							</option>
						</select>
						<IconCaretDownFill />
					</div>
				</div>
				<div class="control-group">
					<label for="color">Color</label>
					<input bind:value={color} id="color" type="color" />
				</div>
			</div>
		</div>

		<ul class="icon-grid">
			{#each iconSearch.results as icon (icon.nameKebab)}
				{@const svg = getSvg(icon.nameKebab, strokeWeight, color, size)}
				<Icon
					selectedAction={selectedActionOnClick}
					{svg}
					{size}
					nameKebab={icon.nameKebab}
					namePascal={icon.namePascal}
				/>
			{:else}
				<p class="text-align-center no-results">No results found.</p>
			{/each}
		</ul>
	</div>
</div>

<style>
	input[type='range'] {
		accent-color: #000;
	}

	@media (prefers-color-scheme: dark) {
		input[type='range'] {
			accent-color: #fff;
		}
	}

	.controls {
		position: sticky;
		padding: 1rem;
		background: #fff;
		z-index: 1;
		top: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	@media (prefers-color-scheme: dark) {
		.controls {
			background: #222;
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
		label,
		.count {
			color: #fff;
		}
	}

	.inner-controls {
		margin: 1.5rem 0 0;
		display: flex;
		gap: 1.5rem;
		justify-content: center;
	}

	@media (max-width: 960px) {
		.inner-controls {
			flex-wrap: wrap;
		}

		.control-group {
			flex: 1 0 40%;
		}
	}

	input[type='color'] {
		min-width: 20px;
	}

	@media (max-width: 960px) {
		.inner-controls input[type='range'] {
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

	.control-group label {
		white-space: nowrap;
	}

	.stroke-weight {
		width: 30px;
	}

	.icon-grid {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
	}

	.no-results {
		grid-column: -1 / 1;
		padding: 4rem;
	}

	@media (prefers-color-scheme: dark) {
		.no-results {
			color: #fff;
		}
	}

	.hero {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero h2 {
		margin: 0;
	}
</style>
