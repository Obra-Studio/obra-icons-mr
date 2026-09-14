import vue from '@vitejs/plugin-vue';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ESM build. Rollup preserves the module graph one-to-one with `src` instead of
// rolling ~1000 icons into a single file, so `sideEffects: false` can actually
// do its job and consumers can deep import a single icon
// (`obra-icons-vue/icons/Add`) without pulling in the barrel.
//
// The single-file UMD build for `require()` consumers lives in
// vite.config.umd.ts — preserveModules and UMD are mutually exclusive.
// https://vite.dev/config/
export default defineConfig({
	base: '/vue-demo/',
	plugins: [vue()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
			},
		},
		emptyOutDir: false,
		// public/ belongs to the demo app, not to the published package
		copyPublicDir: false,
	},
});
