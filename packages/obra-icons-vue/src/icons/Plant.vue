<script>
// ! This file is automatically generated, please don't edit it directly.
export default {
	name: 'Plant',
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
		<g class="oi-plant">
			<path
				class="oi-vector"
				d="M11.964 6.96999C11.964 6.96999 8.88899 7.27599 7.27899 5.93499C5.66899 4.59299 6.03599 2.02999 6.03599 2.02999C6.03599 2.02999 9.11099 1.72399 10.722 3.06499C12.332 4.40699 11.964 6.96999 11.964 6.96999Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M12.036 6.96999C12.036 6.96999 15.111 7.27599 16.721 5.93499C18.331 4.59299 17.964 2.02999 17.964 2.02999C17.964 2.02999 14.889 1.72399 13.279 3.06499C11.669 4.40699 12.036 6.96999 12.036 6.96999Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-box"
				d="M4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10H19C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8946 10.4804 20 10.7348 20 11V13C20 13.2652 19.8946 13.5196 19.7071 13.7071C19.5196 13.8946 19.2652 14 19 14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13V11Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				class="oi-vector"
				d="M5 14H19L17 22H7L5 14Z"
				:stroke="color"
				:stroke-width="strokeWidth"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
