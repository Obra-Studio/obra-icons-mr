<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Palette',
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
		<g class="oi-palette">
			<path
				class="oi-medium-dot"
				d="M8 15H8.012"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-medium-dot"
				d="M8 9.5H8.012"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-medium-dot"
				d="M12 7H12.012"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-medium-dot"
				d="M15.5 9.5H15.512"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-vector"
				d="M21 12C21 14.4797 15.2325 11.9604 13.6103 13.5882C11.9807 15.2234 14.4909 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
				:stroke="color"
				:stroke-width="strokeWidth"
			/>
		</g>
	</svg>
</template>
