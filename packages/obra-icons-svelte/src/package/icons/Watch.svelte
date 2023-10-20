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
	<g class="oi-watch">
		<path
			class="oi-ellipse"
			d="M12 18.3372C15.5 18.3372 18.3373 15.4999 18.3373 11.9999C18.3373 8.49991 15.5 5.6626 12 5.6626C8.49998 5.6626 5.66266 8.49991 5.66266 11.9999C5.66266 15.4999 8.49998 18.3372 12 18.3372Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12 9.28406V12.0001L13.358 13.3581"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M16.083 16.8436L15.7662 20.311C15.7254 20.7624 15.5168 21.1822 15.1815 21.4872C14.8463 21.7923 14.4088 21.9605 13.9555 21.9587H10.0354C9.58215 21.9605 9.14468 21.7923 8.80943 21.4872C8.47418 21.1822 8.26556 20.7624 8.22476 20.311L7.9079 16.8436M7.91695 7.15652L8.23382 3.6891C8.27447 3.23922 8.48181 2.82078 8.81514 2.51593C9.14847 2.21107 9.58372 2.04182 10.0354 2.0414H13.9736C14.4269 2.03956 14.8644 2.2078 15.1996 2.51287C15.5349 2.81794 15.7435 3.23766 15.7843 3.6891L16.1012 7.15652"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
