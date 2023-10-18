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
	<g class="oi-divide">
		<path
			class="oi-line"
			d="M20.4853 12.0001H3.51472"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-dot"
			d="M11.9915 4.92053L12 4.92902"
			stroke={color}
			stroke-width="4"
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M12 19.071L12.0085 19.0795"
			stroke={color}
			stroke-width="4"
			stroke-linecap="round"
		/>
	</g>
</svg>
