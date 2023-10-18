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
	<g class="oi-pause-play">
		<path
			class="oi-triangle"
			d="M6 7.76619C6 6.9889 6.84797 6.50878 7.5145 6.9087L14.5708 11.1425C15.2182 11.5309 15.2182 12.4691 14.5708 12.8575L7.5145 17.0913C6.84797 17.4912 6 17.0111 6 16.2338V7.76619Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M18 7V17"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
