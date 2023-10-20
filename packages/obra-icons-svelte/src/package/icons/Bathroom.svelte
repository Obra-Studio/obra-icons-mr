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
	<g class="oi-bathroom">
		<path
			class="oi-vector"
			d="M7.5 15.5H7C5.34315 15.5 4 14.1569 4 12.5V10.5H20V12.5C20 14.1569 18.6569 15.5 17 15.5V15.5M7.5 15.5V18.5M7.5 15.5H17M17 15.5V18.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M7 10.5V7C7 6.33333 7.4 5 9 5C10.6 5 11 6.33333 11 7"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
