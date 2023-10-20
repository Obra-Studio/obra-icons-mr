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
	<g class="oi-align-group-top">
		<path
			class="oi-line"
			d="M2.5 4.5L20.5 4.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M9.5 14.5L9.5 8.5C9.5 7.94772 9.05228 7.5 8.5 7.5L6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5L5.5 14.5C5.5 15.0523 5.94772 15.5 6.5 15.5H8.5C9.05228 15.5 9.5 15.0523 9.5 14.5Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M17.5 18.5L17.5 8.5C17.5 7.94772 17.0523 7.5 16.5 7.5L14.5 7.5C13.9477 7.5 13.5 7.94771 13.5 8.5L13.5 18.5C13.5 19.0523 13.9477 19.5 14.5 19.5H16.5C17.0523 19.5 17.5 19.0523 17.5 18.5Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
