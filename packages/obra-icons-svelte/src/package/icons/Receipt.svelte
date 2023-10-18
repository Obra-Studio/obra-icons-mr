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
	<g class="oi-receipt">
		<path
			class="oi-vector"
			d="M6 18V3L8.5 5L10.75 3L13 5L15.25 3L17.5 5L20 3V19.5C20 20.3284 19.3284 21 18.5 21V21C17.6716 21 17 20.3284 17 19.5V18H4V19C4 20.1046 4.89543 21 6 21H18.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M9.5 14.5H16.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-line"
			d="M9.5 11.5H16.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-line"
			d="M9.5 8.5H13"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
