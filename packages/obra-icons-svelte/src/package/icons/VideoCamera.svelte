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
	<g class="oi-video-camera">
		<path
			class="oi-vector"
			d="M20.4672 8.15137L15.079 12.0001L20.4672 15.8489V8.15137Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M13.5395 6.61169H5.07222C4.22197 6.61169 3.53271 7.30095 3.53271 8.1512V15.8487C3.53271 16.699 4.22197 17.3882 5.07222 17.3882H13.5395C14.3897 17.3882 15.079 16.699 15.079 15.8487V8.1512C15.079 7.30095 14.3897 6.61169 13.5395 6.61169Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
