<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'GlassesAlt',
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
		<g class="oi-glasses-alt">
			<path
				class="oi-vector"
				d="M7.50003 4.5H5.85024C5.63999 4.5 5.45229 4.63077 5.38153 4.82876C4.03243 8.60399 1.83483 15.8348 3.00003 17"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-vector"
				d="M15.6707 4.5H17.3205C17.5307 4.5 17.7184 4.63077 17.7892 4.82876C19.1383 8.60399 21.3359 15.8348 20.1707 17"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M9 17H14"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<circle
				class="oi-ellipse"
				cx="6"
				cy="17"
				r="3"
				:stroke="color"
				:stroke-width="strokeWidth"
			/>
			<circle
				class="oi-ellipse"
				cx="17"
				cy="17"
				r="3"
				:stroke="color"
				:stroke-width="strokeWidth"
			/>
		</g>
	</svg>
</template>
