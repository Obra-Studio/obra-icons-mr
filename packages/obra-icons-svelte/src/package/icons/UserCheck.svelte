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
	<g class="oi-user-check">
		<path
			class="oi-ellipse"
			d="M10.5 11C12.7091 11 14.5 9.20914 14.5 7C14.5 4.79086 12.7091 3 10.5 3C8.29086 3 6.5 4.79086 6.5 7C6.5 9.20914 8.29086 11 10.5 11Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M15.8787 19.0923L17.8787 21.0923L21.8787 17.0923"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M3 21V19C3 16.7909 4.79086 15 7 15H15"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
