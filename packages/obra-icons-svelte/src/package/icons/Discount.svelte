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
	<g class="oi-discount" clip-path="url(#clip0_282_29470)">
		<path
			class="oi-vector"
			d="M10.287 4.13981C10.719 2.33896 13.2809 2.33896 13.713 4.13981V4.13981C13.9923 5.30379 15.3262 5.8563 16.3467 5.23072V5.23072C17.9256 4.26284 19.7372 6.07438 18.7693 7.65329V7.65329C18.1437 8.67382 18.6962 10.0077 19.8602 10.287V10.287C21.661 10.719 21.661 13.2809 19.8602 13.713V13.713C18.6962 13.9923 18.1437 15.3262 18.7693 16.3467V16.3467C19.7372 17.9256 17.9256 19.7372 16.3467 18.7693V18.7693C15.3262 18.1437 13.9923 18.6962 13.713 19.8602V19.8602C13.2809 21.661 10.719 21.661 10.287 19.8602V19.8602C10.0077 18.6962 8.67382 18.1437 7.65329 18.7693V18.7693C6.07438 19.7372 4.26284 17.9256 5.23072 16.3467V16.3467C5.8563 15.3262 5.30379 13.9923 4.13981 13.713V13.713C2.33896 13.2809 2.33896 10.719 4.13981 10.287V10.287C5.30379 10.0077 5.8563 8.67382 5.23072 7.65329V7.65329C4.26284 6.07438 6.07438 4.26284 7.65329 5.23072V5.23072C8.67382 5.8563 10.0077 5.30379 10.287 4.13981V4.13981Z"
			stroke={color}
			stroke-width={strokeWidth}
		/>
		<path
			class="oi-mini-dot"
			d="M10.005 9.99512L10.005 10.0051"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="oi-mini-dot"
			d="M14.005 13.9951L14.005 14.0051"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			id="Vector 7"
			d="M14.005 9.99512L10.005 13.9951"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
	<defs>
		<clipPath class="clip0_282_29470">
			<rect width={size} height={size} fill="white" />
		</clipPath>
	</defs>
</svg>
