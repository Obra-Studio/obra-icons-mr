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
	<g class="oi-task-list">
		<path
			class="oi-box"
			d="M6 21.6H18C18.6627 21.6 19.2 21.0628 19.2 20.4V7.0286C19.2 6.70018 19.0654 6.38612 18.8276 6.15963L15.2276 2.73106C15.0045 2.51855 14.7081 2.40002 14.4 2.40002H6C5.33726 2.40002 4.8 2.93728 4.8 3.60002V20.4C4.8 21.0628 5.33726 21.6 6 21.6Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-mini-dot"
			d="M8.41202 9.59998H8.40002"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-mini-dot"
			d="M8.41202 16.8H8.40002"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-mini-dot"
			d="M8.41202 13.2H8.40002"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
		<path
			class="oi-vector"
			d="M15.6 13.2H12M15.6 16.8H12M15.6 9.59998H12"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
		/>
	</g>
</svg>
