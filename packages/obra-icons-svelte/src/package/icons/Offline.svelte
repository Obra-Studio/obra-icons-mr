<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-offline">
		<path
			class="oi-vector"
			d="M7 19C4.79086 19 3 17.2091 3 15C3 13.0929 4.33457 11.4976 6.12071 11.097C6.04169 10.7439 6 10.3768 6 10C6 7.23858 8.23858 5 11 5C13.4193 5 15.4373 6.71825 15.9002 9.00098C15.9334 9.00033 15.9666 9 16 9C18.7614 9 21 11.2386 21 14C21 16.7614 18.7614 19 16 19H7Z"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M21 21L3 3"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
