<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'UnorderedList',
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
		<g class="oi-unordered-list">
			<path
				class="oi-line"
				d="M19.0001 12H10.0001"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M19.0001 17.0001H10.0001"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M19.0001 7H10.0001"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-dot"
				d="M5.50006 6.98804L5.50006 7.00004"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-dot"
				d="M5.50006 11.988L5.50006 12"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-dot"
				d="M5.50006 16.9882L5.50006 17.0002"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>
