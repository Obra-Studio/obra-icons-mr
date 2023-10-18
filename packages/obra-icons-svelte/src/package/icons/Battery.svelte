<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-battery">
		<path
			class="oi-box"
			d="M18 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7Z"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M21 10H19V14H21V10Z"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
