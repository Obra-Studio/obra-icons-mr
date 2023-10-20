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
	<g class="oi-three-rows-fill">
		<rect
			class="oi-fill"
			x="3"
			y="3"
			width="18"
			height="5"
			rx="2"
			fill={color}
		/>
		<rect
			class="oi-fill"
			x="3"
			y="9.5"
			width="18"
			height="5"
			rx="2"
			fill={color}
		/>
		<rect
			class="oi-fill"
			x="3"
			y="16"
			width="18"
			height="5"
			rx="2"
			fill={color}
		/>
	</g>
</svg>
