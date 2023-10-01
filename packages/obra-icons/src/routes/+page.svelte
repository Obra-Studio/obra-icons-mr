<script>
	import { IconArrowRight, IconChevronRight, IconDownload } from '$package';
	import FigmaIcon from '$lib/components/icons/FigmaIcon.svelte';
	import iconsCount from '$lib/count';
</script>

<svelte:head>
	<title>Home - Obra Icons</title>
</svelte:head>

<div class="is-dark">
	<div class="bg-black">
		<div class="container padding-medium margin-0-auto">
			<div class="vertical-container-xxx-large">
				<div class="hero">
					<h2 class="text-align-center">
						A simple, consistent set of icons, perfect for user
						interfaces.
					</h2>

					<div class="justify-content-center button-group">
						<a class="button inverse" href="/icons">
							<span>Explore the icon set</span>
							<IconArrowRight />
						</a>

						<a
							class="button inverse"
							href="/"
							onclick="alert('Coming soon!')"
						>
							<span>Buy the files</span>
							<IconArrowRight />
						</a>

						<!--						<a class="button inverse" href="/">-->
						<!--							<FigmaIcon />-->
						<!--							<span>Buy on Figma community</span>-->
						<!--						</a>-->

						<!--						<a class="button inverse" href="/">-->
						<!--							<IconDownload />-->
						<!--							<span>Buy via download</span>-->
						<!--						</a>-->
					</div>
				</div>
			</div>

			<div class="vertical-container-x-large">
				<ul class="justify-content-center flex gap-medium">
					<li class="opacity-75">Version 1.0.0</li>
					<li class="opacity-75">
						{iconsCount} high quality icons
					</li>
				</ul>

				<div class="padding-medium text-align-center">
					<div class="hide-md">
						<img
							srcset="/base-mobile.png 1x, /base-mobile@2x.png 2x"
							src="/base-mobile.png"
							alt="Base set - Obra Icons"
						/>
					</div>
					<div class="show-md hide-sm">
						<img
							srcset="/base.png 1x, /base@2x.png 2x"
							src="/base.png"
							alt="Base set - Obra Icons"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="is-dark">
	<div class="bg-dark-grey">
		<div class="container padding-medium margin-0-auto is-dark">
			<div class="vertical-container-xxx-large">
				<h2 class="text-align-center">Why Obra Icons?</h2>

				<ul class="advantages">
					<li class="vertical-container-x-large">
						<div class="image-holder">
							<img
								srcset="/illustration-quality.png 1x, /illustration-quality@2x.png 2x"
								src="/illustration-quality.png"
								alt="Extremely high quality"
							/>
						</div>

						<div class="content">
							<h3>Extremely high quality</h3>
							<p>
								Detailed vectors, consistent to the highest
								level, with crisp details and consistent
								rounding.
							</p>
						</div>
					</li>

					<li class="vertical-container-x-large">
						<div class="image-holder">
							<img
								srcset="/illustration-weights.png 1x, /illustration-weights@2x.png 2x"
								src="/illustration-weights.png"
								alt="Multiple weights and sizes"
							/>
						</div>

						<div class="content">
							<h3>Multiple weights and sizes</h3>
							<p>
								Has support for multiple weights and sizes (24
								and 32px). Weight-matched against commonly used
								sans-serif fonts, like Inter and Proxima Nova.
							</p>
						</div>
					</li>
					<li>
						<div class="content">
							<h3>Curated</h3>
							<p>
								We strive for less icons with the highest
								quality. We selected the essential icons for UI
								design evaluated against tons of real-life UI
								design projects.
							</p>
						</div>
					</li>
					<li>
						<div class="content">
							<h3>Easy to use</h3>
							<p>
								Download an icon from the website, use the Figma
								plugin, download the SVG set or integrate in
								your dev stack using the npm package.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div class="container padding-medium margin-0-auto">
	<div class="vertical-container-x-large">
		<div class="columns buy-obra-icons-plus">
			<div class="column">
				<div class="text-align-center">
					<img
						srcset="/illustration-obra-plus.png 1x, /illustration-obra-plus@2x.png 2x"
						src="/illustration-obra-plus.png"
						alt="Obra Icons Plus"
					/>
				</div>
			</div>

			<div class="column">
				<div class="content">
					<h2>Buy the Obra Icons files</h2>

					<ul>
						<li>
							SVG files with original, non-outlined vectors for
							further customization
						</li>
						<li>
							<code>.fig</code> file for direct import into Figma
						</li>
					</ul>

					<div class="button-group">
						<a
							class="button"
							href="/"
							onclick="alert('Coming soon!')"
						>
							<span>Buy the files</span>
							<IconArrowRight />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
