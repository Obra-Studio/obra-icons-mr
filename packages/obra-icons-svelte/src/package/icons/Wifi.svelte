<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
  export let strokeWidth = 2
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-wifi">
		<path
			class="oi-vector"
			d="M4.99991 12.5501C6.97648 10.9037 9.46752 10.0022 12.0399 10.0022C14.6123 10.0022 17.1034 10.9037 19.0799 12.5501"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M1.41991 9.00004C4.34233 6.424 8.1042 5.00269 11.9999 5.00269C15.8956 5.00269 19.6575 6.424 22.5799 9.00004"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M8.52989 16.1101C9.5451 15.3888 10.7596 15.0013 12.0049 15.0013C13.2502 15.0013 14.4647 15.3888 15.4799 16.1101"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M11.9999 20H12.0099"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
