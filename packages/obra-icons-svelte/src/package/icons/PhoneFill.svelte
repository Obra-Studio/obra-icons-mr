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
	<g class="oi-phone-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8 1.5C6.89543 1.5 6 2.39543 6 3.5V20.5C6 21.6046 6.89543 22.5 8 22.5H16C17.1046 22.5 18 21.6046 18 20.5V3.5C18 2.39543 17.1046 1.5 16 1.5H8ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19H12.012C12.5643 19 13.012 18.5523 13.012 18C13.012 17.4477 12.5643 17 12.012 17H12Z"
			fill={color}
		/>
	</g>
</svg>
