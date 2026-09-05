<script lang="ts">
	let dismissed = $state(false);
</script>

{#if !dismissed}
	<div class="promo-banner">
		<div class="promo-banner-content">
			<span class="promo-text">
				Our free shadcn/ui kit for Figma has been updated to 2.2.0.
			</span>
			<a
				class="promo-cta"
				href="https://www.figma.com/community/file/1514746685758799870/shadcn-ui-kit-community-edition-2-2-0-by-obra"
				target="_blank"
				rel="noopener noreferrer"
			>
				Get the Community Edition &rarr;
			</a>
		</div>
		<button
			class="promo-close"
			onclick={() => (dismissed = true)}
			aria-label="Dismiss banner"
		>
			&times;
		</button>
	</div>
{/if}

<style>
	.promo-banner {
		background: #1a1a1a;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 2.5rem 0.5rem 1rem;
		font-size: 0.875rem;
		position: relative;
	}

	.promo-banner-content {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.promo-text {
		font-weight: 400;
		opacity: 0.85;
	}

	.promo-cta {
		color: #fff;
		font-weight: 600;
		text-decoration: none;
		background: #333;
		padding: 0.2rem 0.75rem;
		border-radius: 1.5rem;
		transition: background 0.15s ease;
	}

	.promo-cta:hover {
		background: #444;
	}

	.promo-close {
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		color: #fff;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		line-height: 1;
		opacity: 0.4;
		transition: opacity 0.15s ease;
	}

	.promo-close:hover {
		opacity: 0.8;
	}
</style>
