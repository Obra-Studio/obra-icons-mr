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
	<g class="oi-atom">
		<path
			class="oi-vector"
			d="M20 20.0537C17.7909 22.2628 12.4183 20.4719 7.99999 16.0537C3.5817 11.6354 1.79083 6.2628 3.99998 4.05365C6.20912 1.84451 11.5817 3.63537 16 8.05367C20.4183 12.4719 22.2092 17.8445 20 20.0537Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M3.99998 20.0537C1.79083 17.8446 3.5817 12.472 7.99999 8.05367C12.4182 3.63538 17.7908 1.84451 20 4.05366C22.2091 6.2628 20.4183 11.6354 16 16.0537C11.5817 20.472 6.20912 22.2629 3.99998 20.0537Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-ellipse"
			d="M14 12.0537C14 13.1583 13.1046 14.0537 12 14.0537C10.8954 14.0537 10 13.1583 10 12.0537C10 10.9491 10.8954 10.0537 12 10.0537C13.1046 10.0537 14 10.9491 14 12.0537Z"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
