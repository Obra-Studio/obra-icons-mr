<script lang="ts">
	import * as iconMap from '$lib/index';

	const icons = Object.entries(iconMap);
	const { IconSearch } = iconMap;

	/**
	 * Turns "IconAlignCenter" to "align-center"
	 */
	function iconNameKebab(str: string) {
		return str
			.replace('Icon', '')
			.match(/[A-Z][a-z]*/g)
			?.join(' ')
			.toLowerCase();
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
					placeholder="Search {icons.length} Obra Icons and Obra Plus Icons..."
					type="text"
				/>

				<IconSearch />
			</div>

			<div class="vertical-container-x-large">
				<ul class="icon-grid">
					{#each icons as [name, icon]}
						{@const nameKebab = iconNameKebab(name)}

						<li class="icon-item">
							<!-- Want to render the icon here e.g. <svelte:component this={icon} />-->
							<!-- {transformIconString(icon)} -->
							<svelte:component this={icon} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
