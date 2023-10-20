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
	<g class="oi-lock-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9.0001 8.19995C9.0001 6.55224 10.3524 5.19995 12.0001 5.19995C13.6478 5.19995 15.0001 6.55224 15.0001 8.19995V11H9.0001V8.19995ZM7.0001 11V8.19995C7.0001 5.44767 9.24782 3.19995 12.0001 3.19995C14.7524 3.19995 17.0001 5.44767 17.0001 8.19995V11H18C19.1045 11 20 11.8954 20 13V20C20 21.1046 19.1045 22 18 22H5.99995C4.89538 22 3.99995 21.1046 3.99995 20V13C3.99995 11.8954 4.89538 11 5.99995 11H7.0001Z"
			fill={color}
		/>
	</g>
</svg>
