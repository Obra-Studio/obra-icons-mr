<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'MessageAlt',
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
		<g class="oi-message-alt">
			<path
				class="oi-vector"
				d="M20 5H4C3.44772 5 3 5.44772 3 6V17C3 17.5523 3.44772 18 4 18H9L12 21L15 18H20C20.5523 18 21 17.5523 21 17V6C21 5.44772 20.5523 5 20 5Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-medium-dot"
				d="M16 11.5H16.012"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-medium-dot"
				d="M12 11.5H12.012"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-medium-dot"
				d="M8 11.5H8.012"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>
