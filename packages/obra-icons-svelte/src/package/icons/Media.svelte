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
	<g class="oi-media">
		<path
			class="oi-vector"
			d="M8.99999 19.8L5.99999 19.8C5.33725 19.8 4.79999 19.2628 4.79999 18.6L4.79999 15.6"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M14.4 19.8L17.4 19.8C18.0627 19.8 18.6 19.2628 18.6 18.6L18.6 15.6"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M4.79999 9.00005L4.79999 6.00005C4.79999 5.33731 5.33725 4.80005 5.99999 4.80005L8.99999 4.80005"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M18.6 9.00005L18.6 6.00005C18.6 5.33731 18.0627 4.80005 17.4 4.80005L14.4 4.80005"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
