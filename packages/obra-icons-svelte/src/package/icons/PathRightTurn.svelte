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
	<g class="oi-path-right-turn">
		<path
			class="oi-line"
			d="M16.4667 19.8L13.1485 16.4818C12.6799 16.0132 11.9201 16.0132 11.4515 16.4818L8.13333 19.8"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-line"
			d="M19.8 16.4667L16.4819 13.1485C16.0132 12.6799 16.0132 11.9201 16.4819 11.4515L19.8 8.13334"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-line"
			d="M16.2 5.06668L4.8 16.4667"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
