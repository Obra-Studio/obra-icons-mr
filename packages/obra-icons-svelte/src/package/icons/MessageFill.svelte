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
	<g class="oi-message-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4 4C2.89543 4 2 4.89543 2 6V17C2 18.1046 2.89543 19 4 19H8.58579L11.2929 21.7071C11.6834 22.0976 12.3166 22.0976 12.7071 21.7071L15.4142 19H20C21.1046 19 22 18.1046 22 17V6C22 4.89543 21.1046 4 20 4H4ZM6 9.5C6 8.94772 6.44772 8.5 7 8.5H17C17.5523 8.5 18 8.94772 18 9.5C18 10.0523 17.5523 10.5 17 10.5H7C6.44772 10.5 6 10.0523 6 9.5ZM6 13.5C6 12.9477 6.44772 12.5 7 12.5H13C13.5523 12.5 14 12.9477 14 13.5C14 14.0523 13.5523 14.5 13 14.5H7C6.44772 14.5 6 14.0523 6 13.5Z"
			fill={color}
		/>
	</g>
</svg>
