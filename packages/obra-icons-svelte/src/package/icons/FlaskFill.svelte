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
	<g class="oi-flask-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.99995 4C8.44769 3.99997 8 3.55227 8 3C8 2.44772 8.44772 2 9 2H9.99995H13.9999H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H14.9999V9.7088L16.458 12H7.54191L8.99995 9.7088V4ZM4.11231 17.3894L6.28406 13.9766C6.3536 13.9919 6.42586 14 6.5 14H17.5C17.5741 14 17.6463 13.9919 17.7158 13.9766L19.8876 17.3894C21.1585 19.3865 19.7239 22 17.3566 22H6.6433C4.27602 22 2.84138 19.3865 4.11231 17.3894ZM12.5 17C12.5 16.1716 13.1716 15.5 14 15.5H14.012C14.8404 15.5 15.512 16.1716 15.512 17C15.512 17.8284 14.8404 18.5 14.012 18.5H14C13.1716 18.5 12.5 17.8284 12.5 17ZM10 15C9.44772 15 9 15.4477 9 16C9 16.5523 9.44772 17 10 17H10.012C10.5643 17 11.012 16.5523 11.012 16C11.012 15.4477 10.5643 15 10.012 15H10Z"
			fill={color}
		/>
	</g>
</svg>
