<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Crosshair',
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
		<g class="oi-crosshair">
			<circle
				class="oi-ellipse"
				cx="12"
				cy="12"
				r="7"
				:stroke="color"
				:stroke-width="strokeWidth"
			/>
			<path
				class="oi-medium-dot"
				d="M12 12H12.012"
				:stroke="color"
				:stroke-width="strokeWidth * 1.5"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M3 12H5"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M19 12H21"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M12 3L12 5"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M12 19L12 21"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
