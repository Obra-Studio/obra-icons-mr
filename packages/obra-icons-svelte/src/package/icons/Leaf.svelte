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
	<g class="oi-leaf">
		<path
			class="oi-vector"
			d="M15.4785 15.4786C17.3997 13.5574 17.1401 10.183 14.8988 7.94169C12 5.0429 5.04288 5.0429 5.04288 5.0429C5.04288 5.0429 5.04288 12 7.94168 14.8988C10.183 17.1401 13.5574 17.3997 15.4785 15.4786Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M19 19L11 11"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="2.16568"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
