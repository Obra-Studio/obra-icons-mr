<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'PathStraightHorizontal',
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
		<g class="oi-path-straight-horizontal">
			<path
				class="oi-line"
				d="M18.9 8.70007L4.50001 8.70007"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M18.9 16.5L4.50001 16.5"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>
