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
>
	<g class="oi-wrench">
		<path
			class="oi-vector"
			d="M8.92344 22V16.9177C6.31554 15.7461 4.5 13.1307 4.5 10.0923C4.5 6.79559 6.6374 3.99688 9.6052 3V8.64437C9.6052 9.96378 10.6774 11.0334 12 11.0334C13.3226 11.0334 14.3948 9.96378 14.3948 8.64437V3C17.3626 3.99688 19.5 6.79559 19.5 10.0923C19.5 13.1307 17.6845 15.7461 15.0766 16.9177V22"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
