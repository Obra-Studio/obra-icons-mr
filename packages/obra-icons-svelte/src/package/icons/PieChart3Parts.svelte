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
>
	<g class="oi-pie-chart-3-parts">
		<path
			class="oi-vector"
			d="M12.0001 3.60002C10.1359 3.60002 8.32468 4.22015 6.85168 5.36272C5.37868 6.5053 4.3276 8.10541 3.864 9.91103C3.40039 11.7167 3.5506 13.6252 4.29096 15.3361C5.03132 17.0469 6.31976 18.4629 7.95337 19.361L12.0001 12L12.0001 3.60002Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-vector"
			d="M20.4001 12C20.4001 10.8969 20.1828 9.80457 19.7607 8.78543C19.3385 7.7663 18.7198 6.84029 17.9398 6.06028C17.1598 5.28027 16.2338 4.66153 15.2146 4.23939C14.1955 3.81725 13.1032 3.59998 12.0001 3.59998L12.0001 12L20.4001 12Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-vector"
			d="M7.80012 19.2746C9.06416 20.0044 10.4966 20.3923 11.9561 20.3999C13.4157 20.4076 14.8521 20.0347 16.1237 19.3182C17.3953 18.6017 18.4583 17.5662 19.2079 16.3138C19.9574 15.0613 20.3677 13.6352 20.3983 12.1759L12.0001 12L7.80012 19.2746Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
	</g>
</svg>
