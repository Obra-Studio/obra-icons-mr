<script lang="ts">
	import { IconArrowRight, IconCaretDownFill, IconChevronDown } from 'obra-icons-svelte';
	import FigmaIcon from '$lib/components/icons/FigmaIcon.svelte';
	import FramerIcon from '$lib/components/icons/FramerIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import NpmIcon from '$lib/components/icons/NpmIcon.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import Icon, { type ActionType } from '$lib/Icon.svelte';
	import { iconSearch } from '$lib/icon-search.svelte';
	import iconsCount from '$lib/count';
	import { getSvg } from '$lib/svgs';
	import { onClickOutside } from 'runed';

	let selectedActionOnClick = $state<ActionType>('copySvg');
	let strokeWeight = $state(1.5);
	let color = $state('#000000');
	let size = $state(24);
	let packageDropdownOpen = $state(false);

	function packageDropdownClickOutside(node: HTMLElement) {
		const handler = onClickOutside(node, () => {
			packageDropdownOpen = false;
		});

		return () => {
			handler.stop();
		};
	}
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
						<div class="package-dropdown" {@attach packageDropdownClickOutside}>
							<button
								class="button inverse"
								onclick={() => (packageDropdownOpen = !packageDropdownOpen)}
							>
								<span class="icon-fill-wrapper"><NpmIcon /></span>
								<span>Choose code package</span>
								<IconChevronDown />
							</button>
							{#if packageDropdownOpen}
								<div class="package-dropdown-menu">
									<a
										href="https://www.npmjs.com/package/obra-icons-svelte"
										target="_blank"
										rel="noopener noreferrer"
									>
										Svelte
										<IconArrowRight />
									</a>
									<a
										href="https://www.npmjs.com/package/obra-icons-react"
										target="_blank"
										rel="noopener noreferrer"
									>
										React
										<IconArrowRight />
									</a>
									<a
										href="https://www.npmjs.com/package/obra-icons-vue"
										target="_blank"
										rel="noopener noreferrer"
									>
										Vue
										<IconArrowRight />
									</a>
								</div>
							{/if}
						</div>
						<a
							class="button inverse"
							href="https://www.figma.com/community/plugin/1417969026159731234/obra-icons"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="icon-fill-wrapper"><FigmaIcon /></span>
							<span>Figma plugin</span>
							<IconArrowRight />
						</a>
						<a
							class="button inverse"
							href="https://www.framer.com/marketplace/plugins/obra-icons/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="icon-fill-wrapper"><FramerIcon /></span>
							<span>Framer plugin</span>
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
					<label for="actionOnClick">Action</label>
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
							<option value="copyVueImport">
								Copy Vue import
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

	.hero :global(.button-group) {
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 640px) {
		.hero :global(.button-group) {
			flex-direction: column;
			width: 100%;
		}

		.hero :global(.button-group .button) {
			width: 100%;
		}

		.package-dropdown {
			width: 100%;
		}
	}

	.package-dropdown {
		position: relative;
	}

	.package-dropdown-menu {
		position: absolute;
		top: calc(100% + 0.5rem);
		left: 0;
		width: 100%;
		background: #fff;
		border-radius: 1rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
		z-index: 10;
	}

	.package-dropdown-menu a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.75rem;
		color: #000;
		text-decoration: none;
		font-weight: 500;
		border-radius: 0.5rem;
	}

	.package-dropdown-menu a:hover {
		background: #f0f0f0;
	}

	.package-dropdown-menu a :global(svg) {
		width: 1rem;
		height: 1rem;
		opacity: 0.4;
	}
</style>
