<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'TrendingUp',
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
		<g class="oi-trending-up">
			<path
				class="oi-vector"
				d="M20.7784 7.21168L13.1969 14.7931L9.20672 10.8029L3.22139 16.7882"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-incomplete-triangle"
				d="M15.9903 7.21174L20.7786 7.21173L20.7786 12"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
