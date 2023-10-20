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
	<g class="oi-road-sign-point-right">
		<path
			class="oi-vector"
			d="M3 5V11H19L22 8L19 5H3Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M11.5 11V22M11.5 2V5M9 22H14"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
