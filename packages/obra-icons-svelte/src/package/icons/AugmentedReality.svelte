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
	<g class="oi-augmented-reality">
		<path
			class="oi-vector"
			d="M10.971 7.28502C11.2818 7.09852 11.6375 7 12 7C12.3625 7 12.7182 7.09852 13.029 7.28502L16.515 9.37702C16.6629 9.46588 16.7853 9.59151 16.8703 9.74168C16.9553 9.89186 17 10.0615 17 10.234V14.536C17 14.8814 16.9106 15.2209 16.7404 15.5214C16.5702 15.822 16.3252 16.0733 16.029 16.251L13.029 18.051C12.7182 18.2375 12.3625 18.336 12 18.336C11.6375 18.336 11.2818 18.2375 10.971 18.051L7.971 16.251C7.67485 16.0733 7.42976 15.822 7.25959 15.5214C7.08943 15.2209 7 14.8814 7 14.536V10.234C7.00014 10.0614 7.04497 9.8917 7.13014 9.74152C7.2153 9.59133 7.3379 9.46576 7.486 9.37702L10.971 7.28502Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M7 9.66797L12 12.427M12 12.427L17 9.66797M12 12.427V17.9999"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M6.8 3H4.9C4.39609 3 3.91282 3.20018 3.5565 3.5565C3.20018 3.91282 3 4.39609 3 4.9V6.8M18.2 22H20.1C20.6039 22 21.0872 21.7998 21.4435 21.4435C21.7998 21.0872 22 20.6039 22 20.1V18.2M22 6.8V4.9C22 4.39609 21.7998 3.91282 21.4435 3.5565C21.0872 3.20018 20.6039 3 20.1 3H18.2M3 18.2V20.1C3 20.6039 3.20018 21.0872 3.5565 21.4435C3.91282 21.7998 4.39609 22 4.9 22H6.8"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
