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
	<g class="oi-iso">
		<path
			class="oi-vector"
			d="M10.973 9.35975C9.1215 8.29919 6.95084 8.35952 6.4611 10.2406C6.28134 11.3839 7.48294 11.761 8.94174 12.128C11.1985 12.6958 11.3003 13.4114 11.0988 14.2671C10.8327 15.3976 8.83389 16.3703 6.28134 14.8244"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M2.46704 8.55737L2.46704 15.4427"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<ellipse
			class="oi-vector"
			cx="17.9937"
			cy="12.0001"
			rx="3.53924"
			ry="3.62554"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
