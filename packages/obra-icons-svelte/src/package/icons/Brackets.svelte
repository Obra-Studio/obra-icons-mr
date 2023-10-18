<svelte:options namespace="svg" />

<script>
  export let size = 24
  export let color = 'currentColor'
  export let strokeWidth = 2
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g class="oi-brackets">
		<path
			class="oi-vector"
			d="M15 3L15.9487 3.31623C17.1737 3.72457 18 4.87099 18 6.16228V8.83772C18 10.129 18.8263 11.2754 20.0513 11.6838L21 12L20.0513 12.3162C18.8263 12.7246 18 13.871 18 15.1623V17.8377C18 19.129 17.1737 20.2754 15.9487 20.6838L15 21"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-vector"
			d="M9 3L8.05132 3.31623C6.82629 3.72457 6 4.87099 6 6.16228V8.83772C6 10.129 5.17371 11.2754 3.94868 11.6838L3 12L3.94868 12.3162C5.17371 12.7246 6 13.871 6 15.1623V17.8377C6 19.129 6.82629 20.2754 8.05132 20.6838L9 21"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
