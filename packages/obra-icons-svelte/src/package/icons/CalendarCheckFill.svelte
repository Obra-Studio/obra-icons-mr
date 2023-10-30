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
	<g class="oi-calendar-check-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8 6V4H5C3.89543 4 3 4.89543 3 6V9H20.9609C20.974 9 20.987 9.00025 21 9.00075V6C21 4.89543 20.1046 4 19 4H16L16 6C16 6.55229 15.5523 7 15 7C14.4477 7 14 6.55228 14 6V4H10L10 6C10 6.55229 9.55228 7 9 7C8.44771 7 8 6.55228 8 6ZM21 10.9993C20.987 10.9997 20.974 11 20.9609 11H3V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10.9993ZM15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929L11 15.5858L9.70711 14.2929C9.31658 13.9024 8.68342 13.9024 8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071L10.2929 17.7071C10.6834 18.0976 11.3166 18.0976 11.7071 17.7071L15.7071 13.7071Z"
			fill={color}
		/>
	</g>
</svg>
