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
	<g class="oi-business">
		<rect
			class="oi-vector"
			x="5"
			y="3"
			width="14"
			height="18"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M3 21H21"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			class="oi-mini-square"
			x="9.63782"
			y="7.5"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="9.63782"
			y="12"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="9.63782"
			y="16.5"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="14.1495"
			y="16.5"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="14.1495"
			y="12.05"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
		<rect
			class="oi-mini-square"
			x="14.1495"
			y="7.55005"
			width="0.1"
			height="0.1"
			stroke={color}
			stroke-width="1.5"
		/>
	</g>
</svg>
