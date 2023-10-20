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
	<g class="oi-cross">
		<path
			class="oi-vector"
			d="M5 9.28577C3.89543 9.28577 3 10.1812 3 11.2858V12.7143C3 13.8189 3.89543 14.7143 5 14.7143H9.28566V19C9.28566 20.1046 10.1811 21 11.2857 21H12.7142C13.8188 21 14.7142 20.1046 14.7142 19V14.7143H19C20.1046 14.7143 21 13.8189 21 12.7143V11.2858C21 10.1812 20.1046 9.28577 19 9.28577H14.7142V5C14.7142 3.89543 13.8188 3 12.7142 3H11.2857C10.1811 3 9.28566 3.89543 9.28566 5V9.28577H5Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
	</g>
</svg>
