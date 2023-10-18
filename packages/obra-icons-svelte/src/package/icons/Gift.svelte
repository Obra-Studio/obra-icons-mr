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
	<g class="oi-gift">
		<path
			class="oi-vector"
			d="M20.0001 12V22H4.00011V12"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M22.0004 7H2.0004V12H22.0004V7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M12.0001 22V7"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12.0004 7H7.5004C6.83736 7 6.20147 6.73661 5.73263 6.26777C5.26379 5.79893 5.0004 5.16304 5.0004 4.5C5.0004 3.83696 5.26379 3.20107 5.73263 2.73223C6.20147 2.26339 6.83736 2 7.5004 2C11.0004 2 12.0004 7 12.0004 7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12.0001 7H16.5001C17.1631 7 17.799 6.73661 18.2679 6.26777C18.7367 5.79893 19.0001 5.16304 19.0001 4.5C19.0001 3.83696 18.7367 3.20107 18.2679 2.73223C17.799 2.26339 17.1631 2 16.5001 2C13.0001 2 12.0001 7 12.0001 7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
