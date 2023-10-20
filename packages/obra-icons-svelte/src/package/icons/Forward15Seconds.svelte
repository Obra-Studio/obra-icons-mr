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
	<g class="oi-forward-15-seconds">
		<path
			class="oi-vector"
			d="M20 13.5C20 17.6 16.6 21 12.5 21C8.4 21 5 17.6 5 13.5C5 9.4 8.4 6 12.5 6H16.5"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M9.93195 17.1152V11.0886C9.93195 11.0796 9.92099 11.0752 9.91475 11.0817L8.35333 12.7033"
			stroke={color}
			stroke-width="1.6"
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M15.8765 11.3269H12.51C12.5045 11.3269 12.5 11.3314 12.5 11.3369V14.2617C12.5 14.2696 12.5086 14.2746 12.5153 14.2703C12.7892 14.0933 13.4685 13.7497 14.1225 13.7156C14.9556 13.6722 16.1835 14.0162 16.1835 15.3661C16.1835 16.7159 14.8679 17.0309 14.2102 17.1033C13.9909 17.1468 13.3419 17.0946 12.5 16.5387"
			stroke={color}
			stroke-width="1.6"
			stroke-linecap="round"
		/>
		<path
			class="oi-incomplete-triangle"
			d="M15.5 3L18.5 6L15.5 9"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
