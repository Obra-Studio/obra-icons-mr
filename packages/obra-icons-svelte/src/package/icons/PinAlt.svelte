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
	<g class="oi-pin-alt">
		<path
			class="oi-vector"
			d="M5 10.726L2 11.231L11.23 2L10.726 5M12 16.881L11.23 18.923L18.923 11.231L16.881 12M15.077 15.077L21 21M3.538 9.692L9.692 3.538L9.928 3.879C12.0722 6.97606 14.5453 9.83201 17.304 12.397L17.539 12.615L12.615 17.538L12.397 17.304C9.83233 14.5454 6.97671 12.0723 3.88 9.928L3.54 9.692H3.538Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
