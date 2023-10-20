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
	<g class="oi-notification-fill">
		<path
			class="oi-vector"
			d="M6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10V15L20 18H4L6 15V10Z"
			fill="#D9D9D9"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V14.6972L20.8321 17.4453C21.0366 17.7522 21.0557 18.1467 20.8817 18.4719C20.7077 18.797 20.3688 19 20 19H4C3.63121 19 3.29235 18.797 3.11833 18.4719C2.94431 18.1467 2.96338 17.7522 3.16795 17.4453L5 14.6972V10Z"
			fill={color}
		/>
		<path
			class="oi-vector"
			d="M14.4999 18.5C14.4999 19.8807 13.3807 21 11.9999 21C10.6192 21 9.49994 19.8807 9.49994 18.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M12.9999 4C12.9999 3.44772 12.5522 3 11.9999 3C11.4477 3 10.9999 3.44772 10.9999 4"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
