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
	<g class="oi-triangle">
		<path
			class="oi-triangle"
			d="M10.8118 4.41764C11.2617 3.56283 12.4857 3.56283 12.9356 4.41764L20.4216 18.6411C20.8422 19.4402 20.2628 20.4 19.3597 20.4H4.38764C3.48463 20.4 2.90517 19.4402 3.32574 18.6411L10.8118 4.41764Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
