<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Send',
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
		<g class="oi-send[paper-plane]" clip-path="url(#clip0_2603_10749)">
			<path
				class="oi-vector"
				d="M21.4919 2.70063L15.1279 21.7925L10.1782 14.0143L2.40001 9.06459L21.4919 2.70063Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M10.1787 14.0146L21.4924 2.70093"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<defs>
			<clipPath class="clip0_2603_10749">
				<rect :width="size" :height="size" fill="white" />
			</clipPath>
		</defs>
	</svg>
</template>
