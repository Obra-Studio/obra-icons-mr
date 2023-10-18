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
	<g class="oi-kanban">
		<path
			class="oi-box"
			d="M19.0001 3H5.00012C3.89555 3 3.00012 3.89543 3.00012 5V19C3.00012 20.1046 3.89555 21 5.00012 21H19.0001C20.1047 21 21.0001 20.1046 21.0001 19V5C21.0001 3.89543 20.1047 3 19.0001 3Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M10.0001 7H7.00012V16H10.0001V7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-box"
			d="M17.0004 7H14.0004V12H17.0004V7Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
