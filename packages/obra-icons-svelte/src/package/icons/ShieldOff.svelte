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
	<g class="oi-shield-off">
		<path
			class="oi-vector"
			d="M3.00003 3L20 20"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12 21C12 21 19 17.4 19 12V5.7L12 3L5 5.7V12C5 17.4 12 21 12 21Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
