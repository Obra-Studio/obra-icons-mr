<script>
	import { IconArrowRight } from '$package';
	import IconFigma from '$lib/components/icons/FigmaIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
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
							<span>Explore {iconsCount} icons for free</span>
							<IconArrowRight />
						</a>
						<a class="button inverse" href="https://www.figma.com/community/file/1297284985156926365">
							<IconFigma />
							<span>Buy on Figma community</span>
							<IconArrowRight />
						</a>
						<a
							class="button inverse"
							href="https://sowl.co/s/bdgsNv"
						>
							<span>Buy the source file directly</span>
							<IconArrowRight />
						</a>

						<a
								href="https://github.com/Obra-Studio/obra-icons-svelte"
								class="button inverse"
						>
							<span class="icon-fill-wrapper">
								<GithubIcon />
							</span>
							<span>Free svelte package (MIT licensed)</span>
							<IconArrowRight />
						</a>

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
								alt="Super high quality"
							/>
						</div>

						<div class="content">
							<h3>Super high quality</h3>
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
								Obra Icons supports multiple stroke weights (1,
								1.5 and 2px) and sizes (24 and 32px). We offer
								the ability to set specific weights to exactly
								match the weight of your font uses, for perfect
								visual consistency.
							</p>
						</div>
					</li>
					<li>
						<div class="content">
							<h3>Over 600 icons</h3>
							<p>
								The icon set contains many icons, so you won’t
								run into the situation where you can’t find the
								right icon for your needs. We selected the
								essential icons for UI design evaluated against
								tons of real-life UI design projects, and are
								continuously growing the set.
							</p>
							<p>
								Need a specific icon? <a
									href="mailto:iconrequest@obra.studio"
									>Let us know</a
								>.
							</p>
						</div>
					</li>
					<li>
						<div class="content">
							<h3>Easy to use</h3>
							<p>
								Download an icon from the website, buy the files
								for use in a design app or integrate in your
								Svelte project using the npm package.
							</p>

							<p>
								Need an integration in another framework? <a
									href="mailto:iconrequest@obra.studio"
									>Let us know</a
								>.
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
		<div class="columns buy-obra-icons">
			<div class="column">
				<div class="text-align-center">
					<img
						srcset="/illustration-buy-obra-files.png 1x, /illustration-buy-obra-files@2x.png 2x"
						src="/illustration-buy-obra-files.png"
						alt="Obra Icons Files"
					/>
				</div>
			</div>

			<div class="column">
				<div class="content">
					<h2>Buy the Figma source file</h2>
					<p>Buy the source file for direct import into Figma.</p>
					<p>
						This file contains the original vectors of the 600+ icons, with its icons
						categorized into different categories. You can use this
						file to extend Obra Icons to fit your own designs or
						design system.
					</p>
					<p>The advantage of buying directly is that you can get notified of future updates. You can also receive a professional VAT invoice.</p>
					<div class="button-group">
						<a class="button" href="https://sowl.co/s/bdgsNv">
							<span>Buy the file directly</span>
							<IconArrowRight />
						</a>
						<a class="button" href="https://www.figma.com/community/file/1297284985156926365">
							<span class="icon-fill-wrapper inverse">
								<IconFigma />
							</span>
							<span>Buy via Figma community</span>
							<IconArrowRight />
						</a>
					</div>

					<div class="vertical-container blacked-links">
						<p>
							Need specific exports or file formats? <a
								href="mailto:info@obra.studio"
						>Let us know</a
						>.
						</p>
					</div>


				</div>
			</div>
		</div>
	</div>
</div>
