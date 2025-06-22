<script setup lang="ts">
import {
	IconAlien,
	IconBalloon,
	IconBrandXFill,
	IconBrandYoutubeFill,
	IconCalendarFill,
	IconDelete,
	IconEuro,
	IconFaceVeryHappy,
	IconGoldfish,
	IconHeartFill,
	IconInfinite,
	IconJoystick,
	IconKey,
	IconLightbulb,
	IconMessage,
	IconNavigationWest,
	IconOffice,
	IconPencil,
	IconQrCodeScan,
	IconRain,
	IconSend,
	IconTemperature,
	IconUser,
	IconVegan,
	IconWarningTriangleFill,
	IconZoomIn,
} from '..';
import { type Color, contrasts } from './colors';

defineProps<{
	size: number;
	color: Color;
	strokeWidth: number;
}>();
</script>

<template>
	<div class="icon-panel" :class="`icon-panel--${contrasts[color]}`">
		<IconAlien :size :color :strokeWidth />
		<IconBalloon :size :color :strokeWidth />
		<IconCalendarFill :size :color />
		<IconDelete :size :color :strokeWidth />
		<IconEuro :size :color :strokeWidth />
		<IconFaceVeryHappy :size :color :strokeWidth />
		<IconGoldfish :size :color :strokeWidth />
		<IconHeartFill :size :color />
		<IconInfinite :size :color :strokeWidth />
		<IconJoystick :size :color :strokeWidth />
		<IconKey :size :color :strokeWidth />
		<IconLightbulb :size :color :strokeWidth />
		<IconMessage :size :color :strokeWidth />
		<IconNavigationWest :size :color :strokeWidth />
		<IconOffice :size :color :strokeWidth />
		<IconPencil :size :color :strokeWidth />
		<IconQrCodeScan :size :color :strokeWidth />
		<IconRain :size :color :strokeWidth />
		<IconSend :size :color :strokeWidth />
		<IconTemperature :size :color :strokeWidth />
		<IconUser :size :color :strokeWidth />
		<IconVegan :size :color :strokeWidth />
		<IconWarningTriangleFill :size :color />
		<IconBrandXFill :size :color />
		<IconBrandYoutubeFill :size :color />
		<IconZoomIn :size :color :strokeWidth />
	</div>
</template>

<style scoped>
.icon-panel {
	padding: 2em;
	border-radius: 0.5rem;
	margin-bottom: 2em;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1em;
}

.icon-panel--dark {
	background: var(--color-control-dark);
}

.icon-panel--light {
	background-color: var(--color-control-light);
}
</style>
