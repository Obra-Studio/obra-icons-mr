<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Pen',
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
		<g class="oi-pen">
			<path
				class="oi-vector"
				d="M4 20V16L17 3L21 7L8 20H4Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M6 10L12 4"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M11 9L15 13"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M12 4L14 6"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
