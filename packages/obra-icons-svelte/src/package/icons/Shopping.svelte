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
	<g class="oi-shopping">
		<path
			class="oi-box"
			d="M7.00002 3H17L20 7H4.00002L7.00002 3Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M4.00002 7H20V20C20 20.5523 19.5523 21 19 21H5.00002C4.44773 21 4.00002 20.5523 4.00002 20V7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.50002 12.933 8.50002 11"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
