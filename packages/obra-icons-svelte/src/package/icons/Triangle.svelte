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
	<g class="oi-triangle">
		<path
			class="oi-triangle"
			d="M10.8118 4.41751C11.2617 3.56271 12.4857 3.56271 12.9356 4.41752L20.4217 18.641C20.8422 19.4401 20.2628 20.3999 19.3598 20.3999H4.38766C3.48465 20.3999 2.90518 19.4401 3.32576 18.641L10.8118 4.41751Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
