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
	<g class="oi-shield-check-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M20 12C20 18 12 22 12 22C12 22 4 18 4 12V5L12 2L20 5V12ZM16.7474 9.66442C17.1143 9.25164 17.0771 8.61957 16.6644 8.25265C16.2516 7.88573 15.6195 7.92291 15.2526 8.3357L10.6667 13.4949L8.74741 11.3357C8.38049 10.9229 7.74842 10.8857 7.33564 11.2527C6.92285 11.6196 6.88567 12.2516 7.25259 12.6644L9.91926 15.6644C10.109 15.8779 10.381 16.0001 10.6667 16.0001C10.9523 16.0001 11.2243 15.8779 11.4141 15.6644L16.7474 9.66442Z"
			fill={color}
		/>
	</g>
</svg>
