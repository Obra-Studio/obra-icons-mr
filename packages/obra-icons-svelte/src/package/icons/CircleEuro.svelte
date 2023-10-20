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
	<g class="oi-circle-euro">
		<circle
			class="oi-ellipse"
			cx="12"
			cy="12.0001"
			r="9"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-vector"
			d="M16.0199 8.08473C13.717 5.78179 7.2 6.15404 7.2 12.1904C7.2 18.2268 13.8198 18.0054 16.0199 15.8052"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-line"
			d="M6 10.5H13"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-line"
			d="M6 13.5H13"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
