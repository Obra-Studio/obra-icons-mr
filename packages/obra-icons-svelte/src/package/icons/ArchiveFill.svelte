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
	<g class="oi-archive-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9H21ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9Z"
			fill={color}
		/>
		<path
			class="oi-fill"
			d="M2 4V6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6V4C22 3.44772 21.5523 3 21 3H3C2.44772 3 2 3.44772 2 4Z"
			fill={color}
		/>
	</g>
</svg>
