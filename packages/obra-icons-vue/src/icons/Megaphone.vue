<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Megaphone',
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
		<g class="oi-megaphone">
			<path
				class="oi-vector"
				d="M20.2361 9C19.6868 8.38625 18.8885 8 18 8C17.6494 8 17.3128 8.06015 17 8.17071V13.7354C17.3763 13.9054 17.5603 14 18 14C18.8885 14 19.6868 13.6137 20.2361 13C20.7111 12.4692 21 11.7684 21 11C21 10.2316 20.7111 9.53076 20.2361 9Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M17 19V3L10 7H4C3.44772 7 3 7.44772 3 8V14C3 14.5523 3.44772 15 4 15H10L17 19Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<rect
				class="oi-box"
				x="5"
				y="15"
				width="4"
				height="6"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
