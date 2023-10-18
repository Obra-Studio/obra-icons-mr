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
	<g class="oi-toggle-off">
		<circle class="oi-fill" cx="9" cy="12" r="3" fill={color} />
		<path
			class="oi-box"
			d="M15 7H9C6.23858 7 4 9.23858 4 12C4 14.7614 6.23858 17 9 17H15C17.7614 17 20 14.7614 20 12C20 9.23858 17.7614 7 15 7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
