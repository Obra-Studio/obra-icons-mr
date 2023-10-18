<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-lock-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9.0001 8.19995C9.0001 6.55224 10.3524 5.19995 12.0001 5.19995C13.6478 5.19995 15.0001 6.55224 15.0001 8.19995V10.8H9.0001V8.19995ZM7.0001 10.8V8.19995C7.0001 5.44767 9.24781 3.19995 12.0001 3.19995C14.7524 3.19995 17.0001 5.44767 17.0001 8.19995V10.8H18.3667C18.8269 10.8 19.2 11.1731 19.2 11.6334V20.7667C19.2 21.227 18.8269 21.6 18.3667 21.6H5.63333C5.1731 21.6 4.8 21.227 4.8 20.7667V11.6334C4.8 11.1731 5.1731 10.8 5.63333 10.8H7.0001Z"
			fill={color}
		/>
	</g>
</svg>
