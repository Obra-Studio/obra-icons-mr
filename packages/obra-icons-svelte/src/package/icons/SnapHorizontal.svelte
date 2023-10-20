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
	<g class="oi-snap-horizontal">
		<path
			class="oi-vector"
			d="M19 3L11 3C6.0295 3 2 7.0295 2 12C2 16.9705 6.0295 21 11 21L19 21M19 3L22 3L22 7L19 7M19 3L19 7M19 21L22 21L22 17L19 17M19 21L19 17M19 7L11 7C8.2385 7 6 9.2385 6 12C6 14.7615 8.2385 17 11 17L19 17"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
