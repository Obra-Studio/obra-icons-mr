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
	<g class="oi-folder-download-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6H11.4142L9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4H4ZM11.2929 16.2071C11.4804 16.3946 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.3946 12.7071 16.2071L14.7071 14.2071C15.0976 13.8166 15.0976 13.1834 14.7071 12.7929C14.3166 12.4024 13.6834 12.4024 13.2929 12.7929L13 13.0858V10.5C13 9.94772 12.5523 9.5 12 9.5C11.4477 9.5 11 9.94771 11 10.5V13.0858L10.7071 12.7929C10.3166 12.4024 9.68342 12.4024 9.29289 12.7929C8.90237 13.1834 8.90237 13.8166 9.29289 14.2071L11.2929 16.2071Z"
			fill={color}
		/>
	</g>
</svg>
