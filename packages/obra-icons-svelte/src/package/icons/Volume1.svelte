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
	<g class="oi-volume-1">
		<path
			class="oi-vector"
			d="M11.0004 4.99994L6.00037 8.99994H2.00037V14.9999H6.00037L11.0004 18.9999V4.99994Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M15.5401 8.45996C16.4775 9.3976 17.004 10.6691 17.004 11.995C17.004 13.3208 16.4775 14.5923 15.5401 15.53"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
