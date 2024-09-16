<script>
	import { IconSearch, IconCircleClose } from 'obra-icons-svelte';

	export let placeholder = '';
	export let value = '';

	function clearInput() {
		value = '';
	}
</script>

<div class="input-with-icon">
	<input bind:value on:input {placeholder} type="text" />
	<div class="search-holder">
		<IconSearch />
	</div>
	{#if value}
		<button aria-label="Clear" class="clear" on:click={clearInput}>
			<IconCircleClose />
		</button>
	{/if}
</div>

<style>
	.input-with-icon {
		position: relative;
		width: 100%;
	}

	.input-with-icon input {
		border: 1px solid #ccc;
		padding: 0.75rem 0.75rem 0.75rem 2.5rem;
		width: 100%;
		border-radius: 1.5rem;
	}

	.input-with-icon input:focus-visible {
		outline: 0;
		border-color: #000;
		box-shadow: 0 0 0 1px #000;
	}

	.input-with-icon .search-holder :global(svg) {
		opacity: 0.5;
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: 0.75rem;
		top: 0.65rem;
	}

	@media (prefers-color-scheme: dark) {
		.input-with-icon .search-holder :global(svg *) {
			stroke: #fff;
		}
	}

	.input-with-icon .clear {
		position: absolute;
		right: 0.75rem;
		top: 0.5rem;
		padding: 0.4rem;
		appearance: none;
		background: none;
		border: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
	}

	@media (prefers-color-scheme: dark) {
		.input-with-icon .clear :global(svg *) {
			stroke: #fff;
		}
	}

	.input-with-icon .clear :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}

	.input-with-icon:has(input:focus) :global(svg) {
		opacity: 1;
	}

	@media (prefers-color-scheme: dark) {
		.input-with-icon svg * {
			stroke: #fff;
		}

		.input-with-icon :global(svg .oi-fill) {
			fill: #fff;
			stroke: none;
		}

		.input-with-icon input:focus-visible {
			border-color: #fff;
			box-shadow: 0 0 0 1px #fff;
		}

		:global(.responds-to-dark) .input-with-icon input {
			background: #222;
			border: 1px solid #777;
			color: #fff;
		}
	}
</style>
