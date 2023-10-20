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
	<g class="oi-flip-vertical">
		<path
			class="oi-line"
			d="M20.5 11.5L2.5 11.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M4.5 2.5L18.5 8.5L4.5 8.5L4.5 2.5Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-fill"
			d="M4.18122 20.2351L19.016 14.466C19.5316 14.2655 19.388 13.5 18.8348 13.5L4 13.5C3.72386 13.5 3.5 13.7239 3.5 14L3.5 19.7691C3.5 20.1208 3.85345 20.3625 4.18122 20.2351Z"
			fill={color}
		/>
	</g>
</svg>
