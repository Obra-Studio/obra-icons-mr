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
	<g class="oi-phone-fill">
		<path
			class="oi-fill"
			d="M6 3.5C6 2.39543 6.89543 1.5 8 1.5H16C17.1046 1.5 18 2.39543 18 3.5V20.5C18 21.6046 17.1046 22.5 16 22.5H8C6.89543 22.5 6 21.6046 6 20.5V3.5Z"
			fill={color}
		/>
		<path
			class="oi-mini-dot"
			d="M12 18H12.012"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
