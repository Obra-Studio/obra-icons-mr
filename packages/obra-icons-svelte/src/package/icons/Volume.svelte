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
	<g class="oi-volume">
		<path
			class="oi-vector"
			d="M16.4999 5L11.4999 9H7.49994V15H11.4999L16.4999 19V5Z"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
