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
	<g class="oi-favorite">
		<path
			class="oi-vector"
			d="M12 3.5L14.8125 9.125L21 10.025L16.5 14.4125L17.5125 20.6L12 17.675L6.4875 20.6L7.5 14.4125L3 10.025L9.1875 9.125L12 3.5Z"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
