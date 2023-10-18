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
	<g class="oi-tv">
		<path
			class="oi-box"
			d="M19.9999 3H3.99991C2.89534 3 1.99991 3.89543 1.99991 5V15C1.99991 16.1046 2.89534 17 3.99991 17H19.9999C21.1045 17 21.9999 16.1046 21.9999 15V5C21.9999 3.89543 21.1045 3 19.9999 3Z"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M4.99988 21H18.9999"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
