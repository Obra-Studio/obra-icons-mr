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
	<g class="oi-favorite-fill">
		<path
			class="oi-fill"
			d="M12 3L14.8125 8.625L21 9.525L16.5 13.9125L17.5125 20.1L12 17.175L6.4875 20.1L7.5 13.9125L3 9.525L9.1875 8.625L12 3Z"
			fill={color}
		/>
	</g>
</svg>
