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
	class="obra-icon"
>
	<g class="oi-circle-forward">
		<circle
			class="oi-ellipse"
			cx="12"
			cy="12.0001"
			r="9"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-vector"
			d="M16 10L11 10C9.34315 10 8 11.3431 8 13V13C8 14.6569 9.34315 16 11 16L12 16"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-incomplete-triangle"
			d="M14 12L16 10L14 8"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
