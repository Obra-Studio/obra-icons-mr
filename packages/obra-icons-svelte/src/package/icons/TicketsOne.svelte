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
	<g class="oi-tickets-one">
		<path
			class="oi-vector"
			d="M2.5 9L2.5 20C2.5 20.5523 2.94772 21 3.5 21H20.5C21.0523 21 21.5 20.5523 21.5 20L21.5 9C21.5 8.44771 21.0523 8 20.5 8H3.5C2.94772 8 2.5 8.44771 2.5 9Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linejoin="bevel"
		/>
		<path
			class="oi-vector"
			d="M4.5 8L16 2.5L18.5 8"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M6.5 11.5H6.51"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M6.5 14.5H6.51"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M6.5 17.5H6.51"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M10.5 17.5H12.5L18 11.5M12 14.5H15"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
