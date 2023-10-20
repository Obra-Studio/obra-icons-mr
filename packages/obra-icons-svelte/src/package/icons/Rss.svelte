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
	<g class="oi-rss">
		<path
			class="oi-vector"
			d="M4.00006 11C6.38701 11 8.67619 11.9482 10.364 13.636C12.0518 15.3239 13.0001 17.6131 13.0001 20"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M4.01206 20H4.00006"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M4.00006 4C8.24353 4 12.3132 5.68571 15.3138 8.68629C18.3144 11.6869 20.0001 15.7565 20.0001 20"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
