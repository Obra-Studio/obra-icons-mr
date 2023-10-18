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
	<g class="oi-percent">
		<path
			class="oi-line"
			d="M18 6L6 18"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-dot"
			d="M6.98804 7H7.00004"
			stroke={color}
			stroke-width="4"
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M17 17H17.012"
			stroke={color}
			stroke-width="4"
			stroke-linecap="round"
		/>
	</g>
</svg>
