<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'FunnelDescending',
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
		<g class="oi-funnel-descending">
			<path
				class="oi-vector"
				d="M6 21V3M6 21L9 17.667M6 21L3 17.667"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M14 3H22L21 7H14V3Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M14 10H20L19 14H14V10Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M14 17H18L17 21H14V17Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
