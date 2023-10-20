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
	<g class="oi-print">
		<path
			class="oi-box"
			d="M5.99988 9V2H17.9999V9"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M5.99988 18H3.99988C3.46944 18 2.96074 17.7893 2.58566 17.4142C2.21059 17.0391 1.99988 16.5304 1.99988 16V11C1.99988 10.4696 2.21059 9.96086 2.58566 9.58579C2.96074 9.21071 3.46944 9 3.99988 9H19.9999C20.5303 9 21.039 9.21071 21.4141 9.58579C21.7892 9.96086 21.9999 10.4696 21.9999 11V16C21.9999 16.5304 21.7892 17.0391 21.4141 17.4142C21.039 17.7893 20.5303 18 19.9999 18H17.9999"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M17.9999 14H5.99988V22H17.9999V14Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
