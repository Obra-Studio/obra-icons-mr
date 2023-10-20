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
	<g class="oi-briefcase-alt">
		<path
			class="oi-vector"
			d="M3 10C3 9.06812 3 8.60218 3.15224 8.23463C3.35523 7.74458 3.74458 7.35523 4.23463 7.15224C4.60218 7 5.06812 7 6 7H18C18.9319 7 19.3978 7 19.7654 7.15224C20.2554 7.35523 20.6448 7.74458 20.8478 8.23463C21 8.60218 21 9.06812 21 10V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H16H8H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V10Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M11.994 13H12.006"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M3 10C3.18614 11.3166 3.73499 12.5338 4.55558 13.5714C6.19462 15.644 8.91777 17 12 17C15.0822 17 17.8054 15.644 19.4444 13.5714C20.265 12.5338 20.8139 11.3166 21 10"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
