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
	<g class="oi-favorite-fill-off">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6.22717 9.05559L3 9.525L7.5 13.9125L6.4875 20.1L12 17.175L16.9992 19.8277L6.22717 9.05559ZM16.622 13.7936L21 9.525L14.8125 8.625L12 3L9.94281 7.11438L16.622 13.7936Z"
			fill={color}
		/>
		<path
			class="oi-vector"
			d="M5 5L19 19"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
