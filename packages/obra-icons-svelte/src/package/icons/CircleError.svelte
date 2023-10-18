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
	<g class="oi-circle-error">
		<path
			class="oi-line"
			d="M15.5 8.5L8.50001 15.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M15.5 15.5L8.50001 8.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-ellipse"
			d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02943 3 2.99999 7.02944 2.99999 12C2.99999 16.9706 7.02943 21 12 21Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
