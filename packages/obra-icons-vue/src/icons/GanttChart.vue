<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'GanttChart',
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
		<g class="oi-gantt-chart">
			<path
				class="oi-line"
				d="M8 8H9"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M10.25 11H12.25"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M14.25 13H15.25"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M17.5 15H18.5"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-vector"
				d="M19.25 19H6C5.44772 19 5 18.5523 5 18V5"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>
