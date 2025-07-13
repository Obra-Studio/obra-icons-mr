<script lang="ts">
	import { page } from '$app/stores';
	import { IconArrowLeft } from 'obra-icons-svelte';

	$: status = $page.status;
	$: message = $page.error?.message || 'An error occurred';
</script>

<svelte:head>
	<title>{status} - Obra Icons</title>
</svelte:head>

<div class="error-container">
	<div class="error-content">
		<h1>{status}</h1>
		<p class="error-message">{message}</p>
		<a href="/" class="button">
			<IconArrowLeft />
			Back to Home
		</a>
	</div>
</div>

<style>
	.error-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-large);
		background: #fff;
	}

	@media (prefers-color-scheme: dark) {
		.error-container {
			background: #222;
		}
	}

	.error-content {
		text-align: center;
		max-width: 400px;
	}

	h1 {
		font-size: 4rem;
		font-weight: 600;
		margin: 0 0 var(--spacing-medium);
		color: #333;
	}

	@media (prefers-color-scheme: dark) {
		h1 {
			color: #fff;
		}
	}

	.error-message {
		font-size: 1.25rem;
		color: #666;
		margin: 0 0 var(--spacing-x-large);
		line-height: 1.4;
	}

	@media (prefers-color-scheme: dark) {
		.error-message {
			color: #ccc;
		}
	}

	.button {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-small);
		padding: var(--spacing-small-medium) var(--spacing-large);
		background: #000;
		color: #fff;
		text-decoration: none;
		border-radius: var(--border-radius-tiny);
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.button:hover {
		background: #333;
		transform: translateY(-1px);
	}

	.button:active {
		transform: translateY(0);
	}

	@media (prefers-color-scheme: dark) {
		.button {
			background: #fff;
			color: #000;
		}

		.button:hover {
			background: #ccc;
		}
	}
</style>