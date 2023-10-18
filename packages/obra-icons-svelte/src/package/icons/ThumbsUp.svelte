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
	<g class="oi-thumbs-up">
		<path
			class="oi-vector"
			d="M4 14.0161C4 12.3593 5.34315 11.0161 7 11.0161H8.49195V20H7C5.34315 20 4 18.6569 4 17V14.0161Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M20.2931 13.9463C20.6995 11.5082 18.8193 9.28873 16.3476 9.28873H14.7807L14.4687 6.48078C14.3799 5.68145 14.0216 4.93615 13.453 4.36746V4.36746C12.7939 3.70837 11.6786 3.91544 11.3001 4.7672L8.49194 11.0855V20.0694H15.8841C17.8395 20.0694 19.5082 18.6557 19.8297 16.727L20.2931 13.9463Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
