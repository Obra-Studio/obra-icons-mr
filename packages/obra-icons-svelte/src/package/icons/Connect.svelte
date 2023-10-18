<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-connect">
		<path
			class="oi-vector"
			d="M16.75 13.25L19 11C20.6569 9.34315 20.6569 6.65685 19 5V5C17.3431 3.34314 14.6569 3.34315 13 5L10.75 7.25M13.25 16.75L11 19C9.34315 20.6569 6.65685 20.6569 5 19V19C3.34315 17.3431 3.34315 14.6569 5 13L7.25 10.75"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M9 15L15 9"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
