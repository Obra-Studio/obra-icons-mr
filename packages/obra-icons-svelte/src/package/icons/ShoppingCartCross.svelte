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
	<g class="oi-shopping-cart-cross">
		<path
			class="oi-line"
			d="M21.1213 3L16.8787 7.24264"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M21.1213 7.24264L16.8787 3"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-medium-dot"
			d="M10 20H10.012"
			stroke={color}
			stroke-width="3"
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M1.99963 2H5.99963L8.67963 14.39C8.77108 14.8504 9.02154 15.264 9.38718 15.5583C9.75282 15.8526 10.2103 16.009 10.6796 16H18.3996C18.8689 16.009 19.3265 15.8526 19.6921 15.5583C20.0577 15.264 20.3082 14.8504 20.3996 14.39M7.08115 7H12"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-medium-dot"
			d="M18.4902 20.0262H18.5022"
			stroke={color}
			stroke-width="3"
			stroke-linecap="round"
		/>
	</g>
</svg>
