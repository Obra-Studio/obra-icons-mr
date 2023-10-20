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
	<g class="oi-send" clip-path="url(#clip0_282_55899)">
		<path
			class="oi-vector"
			d="M21.4919 2.70063L15.1279 21.7925L10.1782 14.0143L2.40001 9.06459L21.4919 2.70063Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-line"
			d="M10.1787 14.0146L21.4924 2.70093"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
	<defs>
		<clipPath class="clip0_282_55899">
			<rect width={size} height={size} fill="white" />
		</clipPath>
	</defs>
</svg>
