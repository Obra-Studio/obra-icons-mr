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
	<g class="oi-tag-horizontal">
		<path
			class="oi-vector"
			d="M8.42496 17.0308C7.78844 17.0308 7.17799 16.7779 6.7279 16.3278L3.1279 12.7278C2.19065 11.7906 2.19064 10.271 3.1279 9.33371L6.7279 5.7337C7.17799 5.28362 7.78844 5.03076 8.42496 5.03076L18.2308 5.03076C19.5563 5.03076 20.6308 6.10528 20.6308 7.43076L20.6308 14.6308C20.6308 15.9562 19.5563 17.0308 18.2308 17.0308L8.42496 17.0308Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-mini-dot"
			d="M7.03809 11.0308H7.05009"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
