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
	<g class="oi-options-horizontal">
		<path
			class="oi-dot"
			d="M18.006 11.994L18.006 12.006"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M12.006 11.994L12.006 12.006"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M6.00598 11.994L6.00598 12.006"
			stroke={color}
			stroke-width={strokeWidth*2}
			stroke-linecap="round"
		/>
	</g>
</svg>
