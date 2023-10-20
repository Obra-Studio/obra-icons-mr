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
	<g class="oi-circle-back-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12 22C16.9706 22 22 16.9706 22 12C22 7.02944 16.9706 2 12 2C7.02944 2 2 7.02944 2 12C2 16.9706 7.02944 22 12 22ZM7.29289 9.29289C6.90237 9.68342 6.90237 10.3166 7.29289 10.7071L9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071C11.0976 12.3166 11.0976 11.6834 10.7071 11.2929L10.4142 11H13C14.1046 11 15 11.8954 15 13C15 14.1046 14.1046 15 13 15H12C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H13C15.2091 17 17 15.2091 17 13C17 10.7909 15.2091 9 13 9L10.4142 9L10.7071 8.70711C11.0976 8.31658 11.0976 7.68342 10.7071 7.29289C10.3166 6.90237 9.68342 6.90237 9.29289 7.29289L7.29289 9.29289Z"
			fill={color}
		/>
	</g>
</svg>
