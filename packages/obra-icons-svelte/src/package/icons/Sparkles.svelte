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
	<g class="oi-sparkles">
		<path
			class="oi-vector"
			d="M11.7845 10.0777L12 9L12.2155 10.0777C12.6906 12.4528 14.5472 14.3094 16.9223 14.7845L18 15L16.9223 15.2155C14.5472 15.6906 12.6906 17.5472 12.2155 19.9223L12 21L11.7845 19.9223C11.3094 17.5472 9.45284 15.6906 7.07768 15.2155L6 15L7.07768 14.7845C9.45285 14.3094 11.3094 12.4528 11.7845 10.0777Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M5.89223 3.53884L6 3L6.10777 3.53884C6.34528 4.72642 7.27358 5.65472 8.46116 5.89223L9 6L8.46116 6.10777C7.27358 6.34528 6.34528 7.27358 6.10777 8.46116L6 9L5.89223 8.46116C5.65472 7.27358 4.72642 6.34528 3.53884 6.10777L3 6L3.53884 5.89223C4.72642 5.65472 5.65472 4.72642 5.89223 3.53884Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M17.9282 4.35923L18 4L18.0718 4.35923C18.2302 5.15095 18.8491 5.76981 19.6408 5.92815L20 6L19.6408 6.07185C18.8491 6.23019 18.2302 6.84905 18.0718 7.64077L18 8L17.9282 7.64077C17.7698 6.84905 17.1509 6.23019 16.3592 6.07185L16 6L16.3592 5.92815C17.1509 5.76981 17.7698 5.15095 17.9282 4.35923Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
