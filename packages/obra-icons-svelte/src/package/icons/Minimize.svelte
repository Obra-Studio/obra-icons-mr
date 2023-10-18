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
	<g class="oi-minimize">
		<path
			class="oi-vector"
			d="M8.00012 3V6C8.00012 6.53043 7.78941 7.03914 7.41434 7.41421C7.03926 7.78929 6.53056 8 6.00012 8H3.00012M21.0001 8H18.0001C17.4697 8 16.961 7.78929 16.5859 7.41421C16.2108 7.03914 16.0001 6.53043 16.0001 6V3M16.0001 21V18C16.0001 17.4696 16.2108 16.9609 16.5859 16.5858C16.961 16.2107 17.4697 16 18.0001 16H21.0001M3.00012 16H6.00012C6.53056 16 7.03926 16.2107 7.41434 16.5858C7.78941 16.9609 8.00012 17.4696 8.00012 18V21"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
