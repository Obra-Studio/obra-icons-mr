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
	<g class="oi-gift">
		<path
			class="oi-vector"
			d="M19.2002 12V21H4.80017V12"
			stroke={color}
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M21.0004 7.5H3.00037V12H21.0004V7.5Z"
			stroke={color}
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M12.0001 21V7"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12.0003 7.5H7.95032C7.35358 7.5 6.78128 7.26295 6.35933 6.84099C5.93737 6.41903 5.70032 5.84674 5.70032 5.25C5.70032 4.65326 5.93737 4.08097 6.35933 3.65901C6.78128 3.23705 7.35358 3 7.95032 3C11.1003 3 12.0003 7.5 12.0003 7.5Z"
			stroke={color}
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12.0001 7.5H16.0501C16.6469 7.5 17.2192 7.26295 17.6411 6.84099C18.0631 6.41903 18.3001 5.84674 18.3001 5.25C18.3001 4.65326 18.0631 4.08097 17.6411 3.65901C17.2192 3.23705 16.6469 3 16.0501 3C12.9001 3 12.0001 7.5 12.0001 7.5Z"
			stroke={color}
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
