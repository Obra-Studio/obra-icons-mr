<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Yen',
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
		<g class="oi-yen">
			<path
				class="oi-line"
				d="M7.45837 15.4211H16.7391"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M7.45837 12.144H16.7391"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-vector"
				d="M6.89355 4L11.9866 12.2225M11.9866 12.2225L17.1064 4M11.9866 12.2225V20.8187"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>
