<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
  // svelte-ignore unused-export-let
  export let strokeWidth = 2
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-caret-left-fill">
		<path
			class="oi-fill"
			d="M14 15.9325C14 16.3564 13.5056 16.588 13.1799 16.3166L8.46093 12.3841C8.22105 12.1842 8.22106 11.8158 8.46093 11.6159L13.1799 7.68341C13.5056 7.41202 14 7.6436 14 8.06752L14 15.9325Z"
			fill={color}
		/>
	</g>
</svg>
