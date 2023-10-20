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
	<g class="oi-ban">
		<path
			class="oi-vector"
			d="M5.57553 5.69713C3.98245 7.32075 3 9.54564 3 12C3 16.9706 7.02944 21 12 21C14.5258 21 16.8086 19.9595 18.4431 18.2838M5.57553 5.69713C7.20876 4.03259 9.48379 3 12 3C16.9706 3 21 7.02944 21 12C21 14.4447 20.0252 16.6618 18.4431 18.2838M5.57553 5.69713L18.4431 18.2838"
			stroke={color}
			stroke-width={strokeWidth}
		/>
	</g>
</svg>
