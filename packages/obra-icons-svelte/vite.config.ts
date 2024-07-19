import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import pkg from './package.json';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.version)
	}
});