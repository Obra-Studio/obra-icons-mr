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
	<g class="oi-fullscreen">
		<path
			class="oi-vector"
			d="M4.52132 19.2L10.2 13.8M4.52132 19.2H8.76396M4.52132 19.2L4.52132 14.9573"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M19.2 4.52135L13.8 9.60002M19.2 4.52135L14.9574 4.52134M19.2 4.52135L19.2 8.76399"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
