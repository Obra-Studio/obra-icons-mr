export const prerender = true;

export function load() {
	return {
		version: import.meta.env.VITE_APP_VERSION,
	};
}
