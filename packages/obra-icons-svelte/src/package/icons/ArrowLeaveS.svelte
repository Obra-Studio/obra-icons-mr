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
	<g class="oi-arrow-leave-s">
		<g id="Group 1">
			<path
				class="oi-line"
				d="M12 8L12 20"
				stroke={color}
				stroke-width={strokeWidth}
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-incomplete-triangle"
				d="M8 17L12 21L16 17"
				stroke={color}
				stroke-width={strokeWidth}
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<path
			class="oi-vector"
			d="M3 9L3 4C3 3.44772 3.44772 3 4 3L20 3C20.5523 3 21 3.44772 21 4L21 9"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
