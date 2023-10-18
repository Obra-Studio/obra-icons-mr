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
	<g class="oi-car">
		<path
			class="oi-vector"
			d="M6 12H4C3.44772 12 3 12.4477 3 13V16C3 16.5523 3.44772 17 4 17H5M6 12C6.16667 10 6.8 6 8 6H12.5M6 12H12.5M19 12H20C20.5523 12 21 12.4477 21 13V16C21 16.5523 20.5523 17 20 17H19M19 12C19 9.6 17 7 16 6H12.5M19 12H12.5M12.5 12V6M9 17H15"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<circle
			class="oi-ellipse"
			cx="7"
			cy="17"
			r="2"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<circle
			class="oi-ellipse"
			cx="17"
			cy="17"
			r="2"
			stroke={color}
			stroke-width={strokeWidth}
		/>
	</g>
</svg>
