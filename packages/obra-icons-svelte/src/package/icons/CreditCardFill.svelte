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
	class="obra-icon"
>
	<g class="oi-credit-card-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V8.6001H2V7ZM2 10.6001H22V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V10.6001ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H9C9.55228 15 10 14.5523 10 14C10 13.4477 9.55228 13 9 13H7Z"
			fill={color}
		/>
	</g>
</svg>
