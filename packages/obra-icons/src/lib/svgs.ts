export const svgs = import.meta.glob('./svgs/*.svg', {
	as: 'raw',
	eager: true,
});

export function getSvg(name: string) {
	return svgs[`./svgs/${name}.svg`];
}
