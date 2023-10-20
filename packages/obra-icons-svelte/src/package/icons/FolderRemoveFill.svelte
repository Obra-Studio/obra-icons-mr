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
	<g class="oi-folder-remove-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6H11.4142L9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4H4ZM9.5 12C8.94772 12 8.5 12.4477 8.5 13C8.5 13.5523 8.94772 14 9.5 14H14.5C15.0523 14 15.5 13.5523 15.5 13C15.5 12.4477 15.0523 12 14.5 12H9.5Z"
			fill={color}
		/>
	</g>
</svg>
