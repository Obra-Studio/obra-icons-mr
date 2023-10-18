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
	<g class="oi-clipboard-error">
		<path
			class="oi-box"
			d="M5 20V5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20Z"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			class="oi-fill"
			d="M9 5V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5Z"
			fill="black"
		/>
		<path
			class="oi-vector"
			d="M14 11.5L10 15.5"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M14 15.5L10 11.5"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
