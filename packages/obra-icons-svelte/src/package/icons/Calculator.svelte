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
	<g class="oi-calculator">
		<path
			class="oi-box"
			d="M18 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M16 6H8V10H16V6Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			class="oi-mini-square"
			x="9"
			y="14"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="12"
			y="14"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="15"
			y="14"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="9"
			y="17"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="12"
			y="17"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="15"
			y="17"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
	</g>
</svg>
