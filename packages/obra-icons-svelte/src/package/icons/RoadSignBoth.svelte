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
	<g class="oi-road-sign-both">
		<path
			class="oi-vector"
			d="M5 4V8H19L21 6L19 4H5ZM19 11.5V15.5H5L3 13.5L5 11.5H19Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12 15.5V22M12 8V11.5M12 2V4M9.5 22H14.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
