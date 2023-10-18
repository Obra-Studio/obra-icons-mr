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
	<g class="oi-thumbs-down">
		<path
			class="oi-vector"
			d="M4 10C4 11.6569 5.34315 13 7 13L8.49195 13L8.49195 4.01611L7 4.01611C5.34315 4.01611 4 5.35925 4 7.01611L4 10Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M20.2931 10.0537C20.6995 12.4918 18.8193 14.7113 16.3476 14.7113L14.7807 14.7113L14.4687 17.5192C14.3799 18.3185 14.0216 19.0639 13.453 19.6325V19.6325C12.7939 20.2916 11.6786 20.0846 11.3001 19.2328L8.49194 12.9145L8.49194 3.9306L15.8841 3.9306C17.8395 3.9306 19.5082 5.34425 19.8297 7.27301L20.2931 10.0537Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
