import { writable } from 'svelte/store';

export const colorStore = writable('#000000');

export const predefinedColors = writable([
    '#000000',
    '#007AFF',
    '#34C759',
    '#FFCC00',
    '#FF3B30',
    '#7AC6F5',
    '#AF52DE',
    '#5856D6',
    '#FF2D55', 
]);

export const customColors = writable([])
