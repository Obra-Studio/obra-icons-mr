<script setup lang="ts">
import { ref } from 'vue';
import { type Color, colors } from './colors';
import IconPanel from './IconPanel.vue';

const sizes = Array(10)
	.fill(0)
	.map((_, i) => 12 * (i + 1));

const strokeWidths = Array(3)
	.fill(0)
	.map((_, i) => i + 1);

const size = ref(sizes[3]);
const color = ref<Color>('Black');
const strokeWidth = ref(strokeWidths[1]);
</script>

<template>
	<h1>Obra Icons Vue Demo</h1>

	<IconPanel :size :color :strokeWidth />

	<div>
		<label
			>Size
			<select v-model="size">
				<option v-for="value in sizes" :key="value" :value>
					{{ value }}
				</option>
			</select>
		</label>

		<label
			>Color
			<select v-model="color">
				<option v-for="value in colors" :key="value" :value>
					{{ value }}
				</option>
			</select>
		</label>

		<label
			>Stroke width
			<select v-model="strokeWidth">
				<option v-for="value in strokeWidths" :key="value" :value>
					{{ value }}
				</option>
			</select>
		</label>
	</div>
</template>
