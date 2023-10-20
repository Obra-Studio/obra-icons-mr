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
	<g class="oi-lock">
		<path
			class="oi-box"
			d="M18 11H5.99999C5.44771 11 4.99999 11.4477 4.99999 12V20C4.99999 20.5523 5.44771 21 5.99999 21H18C18.5523 21 19 20.5523 19 20V12C19 11.4477 18.5523 11 18 11Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M16 7V11H7.99999V7C7.99999 4.8 9.79999 3 12 3C14.2 3 16 4.8 16 7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
