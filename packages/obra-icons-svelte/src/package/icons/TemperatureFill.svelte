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
	<g class="oi-temperature-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V5.00729L14.942 12.9569C16.1879 13.865 17 15.3371 17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17C7 15.3371 7.81208 13.865 9.05801 12.9569L9 5Z"
			fill={color}
		/>
	</g>
</svg>
