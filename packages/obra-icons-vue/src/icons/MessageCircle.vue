<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'MessageCircle',
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
		<g class="oi-message-circle">
			<path
				class="oi-vector"
				d="M12 19.3636C16.4183 19.3636 20 15.7005 20 11.1818C20 6.66312 16.4183 3 12 3C7.58172 3 4 6.66312 4 11.1818C4 13.0237 4.59511 14.7235 5.59941 16.0909L4 21L8.8 18.6828C9.77994 19.1207 10.8622 19.3636 12 19.3636Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
