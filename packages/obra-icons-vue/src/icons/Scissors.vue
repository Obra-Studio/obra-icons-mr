<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Scissors',
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
		<g class="oi-scissors">
			<path
				class="oi-vector"
				d="M6.00012 9C7.65698 9 9.00012 7.65685 9.00012 6C9.00012 4.34315 7.65698 3 6.00012 3C4.34327 3 3.00012 4.34315 3.00012 6C3.00012 7.65685 4.34327 9 6.00012 9Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M6.00012 21C7.65698 21 9.00012 19.6569 9.00012 18C9.00012 16.3431 7.65698 15 6.00012 15C4.34327 15 3.00012 16.3431 3.00012 18C3.00012 19.6569 4.34327 21 6.00012 21Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M20.0001 4L8.12012 15.88"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M14.4701 14.48L20.0001 20"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M8.12012 8.12L12.0001 12"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
