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
	<g class="oi-coin" clip-path="url(#clip0_297_191376)">
		<path
			class="oi-vector"
			d="M10.5 22C5.25329 22 1 17.5228 1 12C1 6.47715 5.25329 2 10.5 2C15.7467 2 20 6.47715 20 12C20 17.5228 15.7467 22 10.5 22Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M14.1216 9.199C13.3699 8.38262 12.3042 7.87305 11.1222 7.87305C8.84558 7.87305 7 9.76363 7 12.0958C7 14.4279 8.84558 16.3185 11.1222 16.3185C12.0118 16.3185 12.8356 16.0298 13.5092 15.539"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M10 2C14.333 2 23 3 23 12C23 21 14.333 22 10 22"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
	<defs>
		<clipPath class="clip0_297_191376">
			<rect width={size} height={size} fill="white" />
		</clipPath>
	</defs>
</svg>
