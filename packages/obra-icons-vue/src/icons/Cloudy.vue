<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Cloudy',
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
		<g class="oi-cloudy">
			<path
				class="oi-vector"
				d="M19.9178 8.81066C19.9717 8.54887 20 8.27774 20 8C20 5.79086 18.2091 4 16 4C15.4381 4 14.9032 4.11587 14.418 4.32503"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M7 20C4.79086 20 3 18.2091 3 16C3 14.0929 4.33457 12.4976 6.12071 12.097C6.04169 11.7439 6 11.3768 6 11C6 8.23858 8.23858 6 11 6C13.4193 6 15.4373 7.71825 15.9002 10.001C15.9334 10.0003 15.9666 10 16 10C18.7614 10 21 12.2386 21 15C21 17.7614 18.7614 20 16 20H7Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
