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
	<g class="oi-pig">
		<path
			class="oi-vector"
			d="M3.43164 10.0137C2.68892 9.78323 1.33666 8.90221 1.86937 7.22212M22.2518 10.0893V14.4347L20.1066 15.3148C19.5199 16.2132 18.1704 18.0211 17.4663 18.0651L17.7964 20.5403H13.6159L13.0109 19.5502C12.0208 19.6419 9.89755 19.6492 9.32549 18.9452L8.61041 20.5403H4.31997L4.98004 16.91C2.51027 13.6782 3.02115 10.9659 3.58531 10.0137C6.12593 4.76858 11.8491 4.7037 14.3932 5.32689C15.7864 3.2985 18.7826 3.3207 20.1066 3.58535L18.6765 7.44896C18.8965 7.53697 19.7216 8.84245 20.1066 9.48419L22.2518 10.0893Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M16.6758 9.95251H16.6679"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
