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
	<g class="oi-hand-move">
		<path
			class="oi-vector"
			d="M20 16V8.5C20 7.672 19.359 7 18.52 7C18 7 17 7.3 17 8.5V5.5C17 4.672 16.359 4 15.52 4C15.013 4 14 4.3 14 5.5V3.5C14 2.672 13.359 2 12.52 2C11.68 2 11 2.672 11 3.5V5.5C11 4.3 10.007 4 9.5 4C8.66 4 8 4.691 8 5.52V14"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M11 5.5V11"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M14 5.5V11"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M17 5.5V11"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M20 15.9999C20 19.9999 16.866 21.9999 13 21.9999C9.134 21.9999 7.804 20.9999 4.804 15.9999L3.233 13.3949C2.697 12.5269 3.126 11.4009 4.114 11.0809C4.43707 10.9754 4.78477 10.9718 5.10998 11.0705C5.43518 11.1692 5.72216 11.3656 5.932 11.6329L8 14.0329"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
