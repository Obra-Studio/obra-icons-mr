<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Flower',
	props: {
		size: { type: Number, default: 24 },
		color: { type: String, default: 'currentColor' },
		strokeWidth: { type: Number, default: 2 },
	},
};
</script>

<template>
	<svg
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="obra-icon"
	>
		<g class="oi-flower">
			<path
				class="oi-vector"
				d="M15.1898 4.29902C14.3242 2.86316 13.2125 1.99999 12 2C10.7875 1.99998 9.67575 2.86319 8.81008 4.29912C7.18269 3.89594 5.78628 4.07167 4.92892 4.92903C4.07157 5.78638 3.89583 7.18279 4.299 8.81016C2.86315 9.67581 1.99999 10.7875 2 12C1.99998 13.2125 2.86315 14.3242 4.29902 15.1898C3.89582 16.8173 4.07156 18.2137 4.92892 19.071C5.78629 19.9284 7.18273 20.1042 8.81015 19.701C9.6758 21.1368 10.7875 22 12 22C13.2125 22 14.3241 21.1369 15.1898 19.7011C16.8172 20.1043 18.2137 19.9286 19.071 19.0712C19.9284 18.2138 20.1042 16.8173 19.7009 15.1899C21.1368 14.3242 22 13.2125 22 12C22 10.7875 21.1368 9.6758 19.701 8.81015C20.1042 7.18273 19.9284 5.78629 19.0711 4.92892C18.2137 4.07156 16.8173 3.89583 15.1898 4.29902Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-ellipse"
				d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
