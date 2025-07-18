export const svgs = import.meta.glob('./svgs/*.svg', {
	import: 'default',
	query: '?raw',
	eager: true,
});

function prepareSvg(
	svg: string,
	strokeWeight: number,
	color: string,
	size: number,
) {
	const colorAttribute = color || 'currentColor';

	// Define the initial stroke widths for each class
	const classStrokeWidths = {
		'oi-mini-dot': 2,
		'oi-dot': 4,
		'oi-medium-dot': 3,
		'oi-mini-square': 2,
		'oi-medium-square': 3,
		'oi-square': 4,
	};

	// Adjust stroke-width for specific classes
	Object.entries(classStrokeWidths).forEach(([className, initialWidth]) => {
		const adjustedWidth = (initialWidth * strokeWeight) / 2;
		const regex = new RegExp(
			`class="${className}"([^>]*stroke-width=")([^"]*)`,
			'g',
		);
		svg = svg.replace(
			regex,
			`class="${className}"$1${adjustedWidth.toFixed(2)}`,
		);
	});

	return svg
		.replace(
			// need the \! or better-comments goes crazy
			// prettier-ignore
			// eslint-disable-next-line no-useless-escape
			"<\!-- ! This file is automatically generated, please don't edit it directly. -->",
			'',
		)
		.replace(/stroke="black"/g, `stroke="${colorAttribute}"`)
		.replace(/fill="black"/g, `fill="${colorAttribute}"`)
		.replace(/width="24"/g, `width="${size}"`)
		.replace(/height="24"/g, `height="${size}"`)
		.replace(/stroke-width="2"/g, `stroke-width="${strokeWeight}"`)
		.trim();
}

export function getSvg(
	name: string,
	strokeWeight: number,
	color: string,
	size: number,
) {
	return prepareSvg(
		svgs[`./svgs/${name}.svg`] || '',
		strokeWeight,
		color,
		size,
	);
}
