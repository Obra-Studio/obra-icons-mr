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
	<g class="oi-paperclip">
		<path
			class="oi-vector"
			d="M21.4399 11.0499L12.2499 20.2399C11.124 21.3658 9.59708 21.9983 8.00489 21.9983C6.41271 21.9983 4.88574 21.3658 3.75989 20.2399C2.63405 19.1141 2.00156 17.5871 2.00156 15.9949C2.00156 14.4027 2.63405 12.8758 3.75989 11.7499L12.9499 2.55992C13.7005 1.80936 14.7184 1.3877 15.7799 1.3877C16.8413 1.3877 17.8593 1.80936 18.6099 2.55992C19.3605 3.31048 19.7821 4.32846 19.7821 5.38992C19.7821 6.45138 19.3605 7.46936 18.6099 8.21992L9.40989 17.4099C9.03461 17.7852 8.52562 17.996 7.99489 17.996C7.46417 17.996 6.95517 17.7852 6.57989 17.4099C6.20461 17.0346 5.99378 16.5256 5.99378 15.9949C5.99378 15.4642 6.20461 14.9552 6.57989 14.5799L15.0699 6.09992"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
