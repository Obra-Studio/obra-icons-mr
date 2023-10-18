<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
  export let strokeWidth = 2
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-folder-fill">
		<path class="oi-fill" d="M3 5H9L11 7H21V19H3V5Z" fill={color} />
	</g>
</svg>
