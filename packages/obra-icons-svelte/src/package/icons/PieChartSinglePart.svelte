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
	<g class="oi-pie-chart-single-part">
		<path
			class="oi-vector"
			d="M12 3.60002C10.3386 3.60002 8.71459 4.09268 7.33322 5.01568C5.95184 5.93868 4.87519 7.25058 4.23942 8.78548C3.60364 10.3204 3.43729 12.0093 3.76141 13.6388C4.08553 15.2682 4.88555 16.765 6.06031 17.9397C7.23507 19.1145 8.73181 19.9145 10.3612 20.2386C11.9907 20.5627 13.6796 20.3964 15.2145 19.7606C16.7494 19.1248 18.0613 18.0482 18.9844 16.6668C19.9074 15.2854 20.4 13.6614 20.4 12L12 12L12 3.60002Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
	</g>
</svg>
