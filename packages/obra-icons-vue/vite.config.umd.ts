import vue from '@vitejs/plugin-vue';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Single-file UMD build, kept for `require()` consumers and script-tag use.
// This one cannot be tree-shaken — the ESM build in vite.config.ts is what
// bundlers should pick up, via the "import" condition in package.json.
export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'ObraIcons', // exposed global variable - required for 'umd'
			formats: ['umd'],
			fileName: () => 'obra-icons-vue.umd.cjs',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
		emptyOutDir: false,
		// public/ belongs to the demo app, not to the published package
		copyPublicDir: false,
	},
});
