<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'DiceOne',
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
		<g class="oi-dice-one">
			<path
				class="oi-box"
				d="M18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-mini-dot"
				d="M11.9958 11.9958L12.0043 12.0042"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
			/>
		</g>
	</svg>
</template>
