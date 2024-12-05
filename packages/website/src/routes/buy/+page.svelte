<script>
	import {
		IconArrowRight,
		IconCheck,
		IconCircleCheckFill,
	} from 'obra-icons-svelte';
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
						alt="Obra Icons Files"
						src="/illustration-buy-obra-files.png"
						srcset="/illustration-buy-obra-files.png 1x, /illustration-buy-obra-files@2x.png 2x"
					/>
				</div>
			</div>

			<div class="column">
				<div class="content">
					<h2>Buy the Obra Icons Figma source file</h2>

					<p><span class="tag">€15</span></p>

					<p>Buy the source file for direct import into Figma.</p>

					<ul class="feature-list">
						<li>
							<IconCircleCheckFill color="green" />
							1030 icons
						</li>
						<li>
							<IconCircleCheckFill color="green" />
							Categorized icons to easily find them
						</li>
						<li>
							<IconCircleCheckFill color="green" />
							Original vectors
						</li>
						<li>
							<IconCircleCheckFill color="green" />
							Drag and drop onto your Figma files to import
						</li>
					</ul>

					<p>
						Use the source file to extend or customize the set to
						your needs.
					</p>

					<div class="button-group">
						<a
							class="button"
							href="https://obra.lemonsqueezy.com/buy/6f465f44-70ac-401f-b0a4-8910a2270aeb"
						>
							<span>Buy the source file</span>
							<IconArrowRight />
						</a>
					</div>

					<div class="vertical-container blacked-links">
						<p>
							Need specific exports or file formats? <a
								href="mailto:info@obra.studio">Let us know</a
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

	.muted {
		color: #666;
	}

	.tag {
		background: #666;
		color: #fff;
		padding: 4px;
		border-radius: 4px;
	}

	.feature-list {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin: 0;
		padding: 0 0 1rem;
		gap: 0.5rem;
	}

	.feature-list li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
