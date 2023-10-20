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
	<g class="oi-unlock-fill">
		<path
			class="oi-vector"
			d="M8 11V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			class="oi-fill"
			x="4"
			y="10"
			width="16"
			height="12"
			rx="2"
			fill={color}
		/>
	</g>
</svg>
