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
	<g class="oi-ordered-list">
		<path
			class="oi-line"
			d="M19 16H11"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M19 8H11"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M6.18584 9.94819V5.45042C6.18584 5.44333 6.17731 5.43975 6.17224 5.4447L4.93555 6.65511"
			stroke={color}
			stroke-width="1.6"
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M4.49124 14.3148C5.35229 13.8645 6.85161 13.3282 7.42725 14.5386C7.64823 15.2416 7.26467 15.6602 6.33437 16.5987L4.33073 18.307C4.32507 18.3118 4.32849 18.321 4.33592 18.321H7.55972"
			stroke={color}
			stroke-width="1.6"
			stroke-linecap="round"
		/>
	</g>
</svg>
