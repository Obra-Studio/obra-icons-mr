<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Passport',
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
		<g class="oi-passport">
			<path
				class="oi-line"
				d="M7 10H17"
				:stroke="color"
				:stroke-width="strokeWidth"
			/>
			<rect
				class="oi-box"
				x="5"
				y="2.5"
				width="14"
				height="20"
				rx="1"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M9 18.5768H15"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<circle
				class="oi-ellipse"
				cx="12"
				cy="10"
				r="5"
				:stroke="color"
				:stroke-width="strokeWidth"
			/>
			<ellipse
				class="oi-ellipse"
				cx="12"
				cy="10"
				rx="1.5"
				ry="5"
				:stroke="color"
				:stroke-width="strokeWidth"
			/>
		</g>
	</svg>
</template>
