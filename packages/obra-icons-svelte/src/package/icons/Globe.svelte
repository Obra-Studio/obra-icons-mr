<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-globe">
		<circle
			class="oi-ellipse"
			cx="12"
			cy="12"
			r="9"
			stroke={color}
			stroke-width="2"
		/>
		<ellipse
			class="oi-ellipse"
			cx="12"
			cy="12"
			rx="4"
			ry="9"
			stroke={color}
			stroke-width="2"
		/>
		<path class="oi-line" d="M3 12H21" stroke={color} stroke-width="2" />
	</g>
</svg>
