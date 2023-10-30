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
	<g class="oi-triangle">
		<path
			class="oi-triangle"
			d="M11.1056 3.78885C11.4741 3.0518 12.5259 3.05181 12.8944 3.78885L20.2764 18.5528C20.6088 19.2177 20.1253 20 19.382 20H4.61803C3.87465 20 3.39116 19.2177 3.72361 18.5528L11.1056 3.78885Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
