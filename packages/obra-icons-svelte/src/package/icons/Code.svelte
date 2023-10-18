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
	<g class="oi-code">
		<path
			class="oi-incomplete-triangle"
			d="M14.7996 18L20.7996 12L14.7996 6"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-incomplete-triangle"
			d="M9.1998 6L3.1998 12L9.1998 18"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
