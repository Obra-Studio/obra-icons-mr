<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'CalendarSelectedDate',
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
		<g class="oi-calendar-selected-date">
			<path
				class="oi-vector"
				d="M4.00002 6C4.00002 5.44772 4.44773 5 5.00002 5H19C19.5523 5 20 5.44772 20 6V19C20 19.5523 19.5523 20 19 20H5.00002C4.44773 20 4.00002 19.5523 4.00002 19V6Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M9 7L9 3"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M3.99995 10L20 10"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-line"
				d="M15 7L15 3"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-fill"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.5 12.5H10.6V16.6H6.5V12.5Z"
				:fill="color"
			/>
		</g>
	</svg>
</template>
