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
	<g class="oi-chat-ai-fill">
		<path
			class="oi-fill"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12 2C7.00841 2 3.00004 6.13214 3.00004 11.1818C3.00004 13.0532 3.54982 14.7975 4.49534 16.2517L3.04923 20.6902C2.9251 21.0712 3.04038 21.4895 3.34216 21.7531C3.64393 22.0167 4.07393 22.0748 4.43478 21.9006L8.83137 19.7781C9.81772 20.1567 10.886 20.3636 12 20.3636C16.9917 20.3636 21 16.2315 21 11.1818C21 6.13214 16.9917 2 12 2ZM12 7L11.5589 9.20551C11.3214 10.3931 10.3931 11.3214 9.20551 11.5589L7 12L9.20551 12.4411C10.3931 12.6786 11.3214 13.6069 11.5589 14.7945L12 17L12.4411 14.7945C12.6786 13.6069 13.6069 12.6786 14.7945 12.4411L17 12L14.7945 11.5589C13.6069 11.3214 12.6786 10.3931 12.4411 9.20551L12 7Z"
			fill={color}
		/>
	</g>
</svg>
