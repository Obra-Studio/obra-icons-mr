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
	<g class="oi-medcase-fill">
		<path
			class="oi-vector"
			d="M15.9999 7V5C15.9999 4.46957 15.7892 3.96086 15.4141 3.58579C15.039 3.21071 14.5303 3 13.9999 3H9.99988C9.46944 3 8.96074 3.21071 8.58566 3.58579C8.21059 3.96086 7.99988 4.46957 7.99988 5V7"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2 9C2 7.34315 3.34315 6 5 6H19C20.6569 6 22 7.34315 22 9V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V9ZM12.25 11C12.8023 11 13.25 11.4477 13.25 12V13.25H14.5C15.0523 13.25 15.5 13.6977 15.5 14.25C15.5 14.8023 15.0523 15.25 14.5 15.25H13.25V16.5C13.25 17.0523 12.8023 17.5 12.25 17.5C11.6977 17.5 11.25 17.0523 11.25 16.5V15.25H10C9.44772 15.25 9 14.8023 9 14.25C9 13.6977 9.44772 13.25 10 13.25H11.25V12C11.25 11.4477 11.6977 11 12.25 11Z"
			fill={color}
		/>
	</g>
</svg>
