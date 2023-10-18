<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-unordered-list">
		<path
			class="oi-line"
			d="M19 12H10"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M19 17.0001H10"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M19 7H10"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-dot"
			d="M5.50006 6.98804L5.50006 7.00004"
			stroke={color}
			stroke-width="3"
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M5.50006 11.988L5.50006 12"
			stroke={color}
			stroke-width="3"
			stroke-linecap="round"
		/>
		<path
			class="oi-dot"
			d="M5.50006 16.9882L5.50006 17.0002"
			stroke={color}
			stroke-width="3"
			stroke-linecap="round"
		/>
	</g>
</svg>
