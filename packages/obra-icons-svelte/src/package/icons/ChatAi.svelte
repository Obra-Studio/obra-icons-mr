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
	<g class="oi-chat-ai">
		<path
			class="oi-vector"
			d="M12 19.3636C16.4183 19.3636 20 15.7005 20 11.1818C20 6.66312 16.4183 3 12 3C7.58172 3 4 6.66312 4 11.1818C4 13.0237 4.59511 14.7235 5.59941 16.0909L4 21L8.8 18.6828C9.77994 19.1207 10.8622 19.3636 12 19.3636Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M11.8922 9.53884L12 9L12.1078 9.53884C12.3453 10.7264 13.2736 11.6547 14.4612 11.8922L15 12L14.4612 12.1078C13.2736 12.3453 12.3453 13.2736 12.1078 14.4612L12 15L11.8922 14.4612C11.6547 13.2736 10.7264 12.3453 9.53884 12.1078L9 12L9.53884 11.8922C10.7264 11.6547 11.6547 10.7264 11.8922 9.53884Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
