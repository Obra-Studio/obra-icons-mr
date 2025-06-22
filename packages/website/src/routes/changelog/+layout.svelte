<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="container-small padding-medium margin-0-auto">
	<div class="vertical-container-xx-large">
		<div class="content blacked-links drop-down-heading-visually">
			{@render children()}
		</div>
	</div>
</div>
