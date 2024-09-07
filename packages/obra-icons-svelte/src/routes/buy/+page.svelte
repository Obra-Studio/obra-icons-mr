<script>
	import { IconArrowRight, IconCheck, IconCircleCheckFill } from '$package';
</script>

<svelte:head>
	<title>Buy - Obra Icons</title>
</svelte:head>

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
					<h2>Buy the Obra Icons Figma source file</h2>

					<p><span class="tag">€15</span></p>

					<p>Buy the source file for direct import into Figma.</p>

					<ul class="feature-list">
						<li><IconCircleCheckFill color="green" /> 950+ icons</li>
						<li><IconCircleCheckFill color="green" /> Categorized into different categories</li>
						<li><IconCircleCheckFill color="green" /> Original vectors with editable strokes</li>
						<li><IconCircleCheckFill color="green" /> Drag and drop onto your Figma files to import</li>
					</ul>

					<p>
						Use the source file to extend or customize the set to your needs.
					</p>

					<div class="button-group">
						<a class="button" href="https://obra.lemonsqueezy.com/buy/f8b657b2-719c-42ee-bc71-04786eb182bc">
							<span>Buy the source file</span>
							<IconArrowRight />
						</a>
					</div>

					<div class="vertical-container blacked-links">
						<p>
							Purchases are handled through LemonSqueezy (acquired by Stripe), wish will give you a clear VAT invoice for business record purposes.
						</p>
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

<style>

	p a {
		color: #000;
	}

	.tag {
		background: #666;
		color: #FFF;
		padding: 4px;
		border-radius: 4px;
	}
	
	.feature-list {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin: 0;
		padding: 0 0 1rem;
		gap: .5rem;
	}


	.feature-list li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: .5rem;
	}

</style>