<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Euro',
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
		<g class="oi-euro">
			<path
				class="oi-vector"
				d="M17 7.46203C14.4252 4.88717 7.13867 5.30338 7.13867 12.0525C7.13867 18.8016 14.5401 18.5541 17 16.0941"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M6 13.231H14"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
			<path
				class="oi-line"
				d="M6 10.3744H14"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>
