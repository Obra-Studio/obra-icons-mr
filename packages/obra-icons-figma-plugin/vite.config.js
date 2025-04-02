import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig(() => {
	return {
		plugins: [svelte()],
		resolve: {
			preserveSymlinks: true,
		},
		optimizeDeps: {
			include: ['obra-icons-svelte'],
		},
	}
})
