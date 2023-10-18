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
	<g class="oi-pin-fill">
		<path
			class="oi-line"
			d="M12 15V21"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-fill"
			d="M18.7876 15.055C18.7005 13.8748 18.3471 11.8471 17 10.5L17 3H7L7 10.5C5.65286 11.8471 5.29956 13.8748 5.21246 15.0551C5.17336 15.5848 5.60643 16 6.13759 16H17.8625C18.3936 16 18.8267 15.5848 18.7876 15.055Z"
			fill={color}
		/>
		<path
			class="oi-vector"
			d="M7 3H17"
			stroke={color}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
