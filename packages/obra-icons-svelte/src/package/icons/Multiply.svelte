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
	<g class="oi-multiply">
		<path
			class="oi-line"
			d="M16.2426 7.75732L7.75736 16.2426"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			class="oi-line"
			d="M16.2426 16.2427L7.75736 7.75739"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
		/>
	</g>
</svg>
