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
	<g class="oi-marker-alt">
		<path
			class="oi-vector"
			d="M6.00001 11L17 3L21 7L13 18L6.00001 11Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12 12C11.4477 11.4477 11.4477 10.5523 12 10L14.5 7.5C15.0523 6.94771 15.9477 6.94772 16.5 7.5V7.5C17.0523 8.05228 17.0523 8.94772 16.5 9.5L14 12C13.4477 12.5523 12.5523 12.5523 12 12V12Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M6 11L5 15L9 19L13 18L6 11Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M3 19L6 16L8 18L5 21L3 19Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
