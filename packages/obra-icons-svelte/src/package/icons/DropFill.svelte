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
	<g class="oi-drop-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4 14.2222C4 18.5178 7.58172 22 12 22C16.4183 22 20 18.5178 20 14.2222C20 8.66667 12 2 12 2C12 2 4 8.66667 4 14.2222ZM9.60335 14.7148C9.44581 14.1854 8.88899 13.884 8.35965 14.0415C7.83031 14.1991 7.52891 14.7559 7.68644 15.2852C8.11875 16.7378 9.26214 17.8812 10.7147 18.3135C11.244 18.4711 11.8009 18.1696 11.9584 17.6403C12.116 17.111 11.8145 16.5541 11.2852 16.3966C10.48 16.157 9.84299 15.52 9.60335 14.7148Z"
			fill={color}
		/>
	</g>
</svg>
