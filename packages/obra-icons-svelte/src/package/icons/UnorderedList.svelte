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
	<g class="oi-unordered-list">
		<path
			class="oi-line"
			d="M19 12H10"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M19 17.0001H10"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M19 7H10"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-dot"
			d="M5.50006 6.98804L5.50006 7.00004"
			stroke={color}
			stroke-width={strokeWidth*1.5}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M5.50006 11.988L5.50006 12"
			stroke={color}
			stroke-width={strokeWidth*1.5}
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M5.50006 16.9882L5.50006 17.0002"
			stroke={color}
			stroke-width={strokeWidth*1.5}
			stroke-linecap="round"
		/>
	</g>
</svg>
