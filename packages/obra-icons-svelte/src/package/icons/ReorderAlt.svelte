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
>
	<g class="oi-reorder-alt">
		<path
			class="oi-dot"
			d="M7.99402 6H8.00602"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M15.994 6H16.006"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M7.99402 12H8.00602"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M15.994 12H16.006"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M7.99402 18H8.00602"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M15.994 18H16.006"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
	</g>
</svg>
