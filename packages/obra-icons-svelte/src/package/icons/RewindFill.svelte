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
	<g class="oi-rewind-fill">
		<g class="oi-fill">
			<path
				d="M11.5 7.69953C11.5 6.17456 9.86173 5.21063 8.52867 5.95122L2.5878 9.2517C1.21618 10.0137 1.21617 11.9863 2.5878 12.7483L8.52867 16.0488C9.86173 16.7894 11.5 15.8255 11.5 14.3005V7.69953Z"
				fill={color}
			/>
			<path
				d="M23 7.69953C23 6.17456 21.3617 5.21063 20.0287 5.95122L14.0878 9.2517C12.7162 10.0137 12.7162 11.9863 14.0878 12.7483L20.0287 16.0488C21.3617 16.7894 23 15.8255 23 14.3005V7.69953Z"
				fill={color}
			/>
		</g>
	</g>
</svg>
