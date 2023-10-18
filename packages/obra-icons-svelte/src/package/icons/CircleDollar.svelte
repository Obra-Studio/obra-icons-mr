<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
  export let strokeWidth = 2
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-circle-dollar">
		<circle
			class="oi-ellipse"
			cx="12"
			cy="12.0001"
			r="9"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-line"
			d="M12 6V18"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M14.7599 8.79492C12.4869 7.57538 9.82194 7.64475 9.22069 9.80777C9 11.1225 10.4752 11.5561 12.2662 11.9782C15.0368 12.6311 15.1618 13.4539 14.9144 14.4379C14.5877 15.7379 12.1338 16.8564 9 15.0787"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
