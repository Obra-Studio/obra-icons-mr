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
	<g class="oi-heart-fill-off">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M3.21666 6.04521C1.91927 8.06444 2.16775 10.7643 3.96212 12.5228L12 20.4001L14.8139 17.6424L3.21666 6.04521ZM17.6709 14.8426L20.0379 12.5228C22.1207 10.4816 22.1207 7.17217 20.0379 5.13099C17.9551 3.0898 14.5783 3.0898 12.4955 5.13099L12 5.61652L11.5046 5.13099C10.1619 3.81513 8.28143 3.34754 6.55654 3.72823L17.6709 14.8426Z"
			fill={color}
		/>
		<path
			class="oi-vector"
			d="M4 4L19 19"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
