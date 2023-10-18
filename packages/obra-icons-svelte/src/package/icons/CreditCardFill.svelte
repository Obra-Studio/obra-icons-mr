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
	<g class="oi-credit-card-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4.63636 5.40002H19.3636C20.2674 5.40002 21 6.13875 21 7.05002V8.60004H3V7.05002C3 6.13875 3.73262 5.40002 4.63636 5.40002ZM3 10.6V16.95C3 17.8613 3.73262 18.6 4.63636 18.6H19.3636C20.2674 18.6 21 17.8613 21 16.95V10.6H3Z"
			fill={color}
		/>
	</g>
</svg>
