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
	<g class="oi-bookmark-fill">
		<path
			class="oi-fill"
			d="M6 3.3999C6 2.84762 6.44772 2.3999 7 2.3999H17C17.5523 2.3999 18 2.84762 18 3.3999V20.3857C18 21.2766 16.9229 21.7228 16.2929 21.0928L12.7071 17.507C12.3166 17.1165 11.6834 17.1165 11.2929 17.507L7.70711 21.0928C7.07714 21.7228 6 21.2766 6 20.3857V3.3999Z"
			fill={color}
		/>
	</g>
</svg>
