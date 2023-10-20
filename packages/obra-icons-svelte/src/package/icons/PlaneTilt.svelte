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
	<g class="oi-plane-tilt">
		<path
			class="oi-vector"
			d="M14.5 6.5L17.5 3.6C17.8846 3.21544 18.4061 2.99939 18.95 2.99939C19.4939 2.99939 20.0154 3.21544 20.4 3.6C20.7846 3.98456 21.0006 4.50614 21.0006 5.05C21.0006 5.59385 20.7846 6.11544 20.4 6.5L17.5 9.5L20 17L17.5 19.55L14 13L11 16V19L9 21L7.5 16.5L3 15L5 13H8L11 10L4.5 6.5L7 4L14.5 6.5Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
