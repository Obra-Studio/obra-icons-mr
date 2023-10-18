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
	<g class="oi-bookmark">
		<path
			class="oi-vector"
			d="M6 3.2C6 2.53726 6.53726 2 7.2 2H16.8C17.4627 2 18 2.53726 18 3.2V19.143C18 20.2064 16.7192 20.7443 15.9599 19.9999L12.8401 16.9413C12.3735 16.4838 11.6265 16.4838 11.1599 16.9413L8.04008 19.9999C7.28076 20.7444 6 20.2064 6 19.143V3.2Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
