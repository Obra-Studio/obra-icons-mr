<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'ToggleOff',
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
		<g class="oi-toggle-off">
			<circle class="oi-fill" cx="9" cy="12" r="3" :fill="color" />
			<path
				class="oi-vector"
				d="M15 7H9C6.23858 7 4 9.23858 4 12C4 14.7614 6.23858 17 9 17H15C17.7614 17 20 14.7614 20 12C20 9.23858 17.7614 7 15 7Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
