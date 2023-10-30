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
			d="M2.49789 5.32071C0.812628 7.74732 1.06735 11.0861 3.26206 13.237L11.3 21.1143C11.6888 21.4954 12.311 21.4954 12.6998 21.1143L15.521 18.3495L2.58579 5.41434C2.5553 5.38385 2.526 5.35262 2.49789 5.32071ZM18.3779 15.5496L20.7377 13.237C23.2206 10.8037 23.2206 6.85006 20.7377 4.41678C18.3332 2.06026 14.4829 1.99632 11.9999 4.22496C10.2623 2.6654 7.85525 2.2285 5.74256 2.91426L18.3779 15.5496Z"
			fill={color}
		/>
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z"
			fill={color}
		/>
	</g>
</svg>
