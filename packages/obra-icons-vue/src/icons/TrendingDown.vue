<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'TrendingDown',
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
		<g class="oi-trending-down">
			<path
				class="oi-vector"
				d="M20.0418 16.7882L12.4604 9.20678L8.47019 13.197L2.48486 7.21167"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-incomplete-triangle"
				d="M15.2538 16.7883H20.042V12"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
