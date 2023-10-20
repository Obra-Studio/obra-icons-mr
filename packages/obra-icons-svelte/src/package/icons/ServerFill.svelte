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
	<g class="oi-server-fill">
		<rect
			class="oi-fill"
			x="1"
			y="1"
			width="22"
			height="10"
			rx="2"
			fill={color}
		/>
		<rect
			class="oi-fill"
			x="1"
			y="13"
			width="22"
			height="10"
			rx="2"
			fill={color}
		/>
		<path
			class="oi-medium-dot"
			d="M6 6H6.01"
			stroke={color}
			stroke-width={strokeWidth*1.5}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-medium-dot"
			d="M6 18H6.01"
			stroke={color}
			stroke-width={strokeWidth*1.5}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
