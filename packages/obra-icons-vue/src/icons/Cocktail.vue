<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Cocktail',
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
		<g class="oi-cocktail">
			<path
				class="oi-ellipse"
				d="M15.55 7C15.5172 6.83845 15.5 6.67123 15.5 6.5C15.5 5.11929 16.6193 4 18 4C19.3807 4 20.5 5.11929 20.5 6.5C20.5 7.88071 19.3807 9 18 9C17.476 9 16.9896 8.83878 16.5878 8.56322"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M9 21H12H15"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M12 13V17V21"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-triangle"
				d="M6 7L12 13L18 7H6Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M3.5 3H6L8.5 7"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
