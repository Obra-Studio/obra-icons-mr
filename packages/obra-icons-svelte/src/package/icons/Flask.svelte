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
	<g class="oi-flask">
		<path
			class="oi-vector"
			d="M6.64335 21H17.3567C18.9348 21 19.8913 19.2577 19.044 17.9262L14 10V3H10V10L4.95602 17.9262C4.10874 19.2577 5.06517 21 6.64335 21Z"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M15 3H9"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M15.5 13H8.5"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-medium-dot"
			d="M14 17H14.012"
			stroke={color}
			stroke-width="3"
			stroke-linecap="round"
		/>
		<path
			class="oi-mini-dot"
			d="M10 16H10.012"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
		/>
	</g>
</svg>
