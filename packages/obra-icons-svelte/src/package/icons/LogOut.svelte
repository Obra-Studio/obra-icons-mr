<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
  export let strokeWidth = 2
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-log-out">
		<path
			class="oi-line"
			d="M21 12H9"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-incomplete-triangle"
			d="M17 16L21 12L17 8"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M10 20H5C4.44772 20 4 19.5523 4 19L4 5C4 4.44771 4.44772 4 5 4H10"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
