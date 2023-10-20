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
	<g class="oi-elephant">
		<path
			class="oi-vector"
			d="M8.397 5.99996C6.371 5.55596 2 6.09646 2 10.8935V20H4.935V16.8905H13.319V20H16.254V14.4475C16.603 14.1515 17.204 16.5115 18.3495 17.1125C19.026 17.4675 19.6075 17.6985 20.236 17.557C21.5975 17.2505 22.2485 16.3575 21.913 14.2255C21.284 14.9655 19.398 15.7715 19.188 14.2255V7.78446C18.9785 6.45146 17.763 3.83096 14.5765 4.00846H11.142C9.675 3.99996 7.495 6.00746 7.998 8.67246C8.154 9.49996 8.75 11.1525 10.8515 11.3375C11.69 11.412 13.0765 11.0715 13.915 9.11696"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M16.5 9.5H16.51"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
