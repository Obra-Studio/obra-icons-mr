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
	<g class="oi-vault">
		<path
			class="oi-line"
			d="M5 19V21"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M19 19V21"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M21 10H17V14H21V10Z"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<circle
			class="oi-ellipse"
			cx="10"
			cy="12"
			r="4"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-medium-dot"
			d="M10 12H10.012"
			stroke={color}
			stroke-width="3"
			stroke-linecap="round"
		/>
	</g>
</svg>
