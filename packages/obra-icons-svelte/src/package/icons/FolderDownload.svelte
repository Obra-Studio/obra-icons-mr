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
	<g class="oi-folder-download">
		<path
			class="oi-vector"
			d="M3 6C3 5.44772 3.44772 5 4 5H9L11 7H20C20.5523 7 21 7.44772 21 8V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V6Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M14 13.5L12 15.5M12 15.5L10 13.5M12 15.5L12 10.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
