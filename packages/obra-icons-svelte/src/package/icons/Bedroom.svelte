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
	<g class="oi-bedroom">
		<path
			class="oi-vector"
			d="M21 16V14C21 12.8954 20.1046 12 19 12H5C3.89543 12 3 12.8954 3 14V16M21 16H3M21 16V18.5M3 16V18.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M5 9C5 7.89543 5.89543 7 7 7H9C10.1046 7 11 7.89543 11 9V12H5V9Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M13 9C13 7.89543 13.8954 7 15 7H17C18.1046 7 19 7.89543 19 9V12H13V9Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
