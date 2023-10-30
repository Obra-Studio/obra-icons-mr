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
	<g class="oi-triangle-fill">
		<path
			class="oi-fill"
			d="M13.7889 3.34166C13.0518 1.86757 10.9482 1.86755 10.2112 3.34166L2.8292 18.1056C2.1643 19.4354 3.1313 21 4.61806 21H19.382C20.8688 21 21.8357 19.4354 21.1708 18.1056L13.7889 3.34166Z"
			fill={color}
		/>
	</g>
</svg>
