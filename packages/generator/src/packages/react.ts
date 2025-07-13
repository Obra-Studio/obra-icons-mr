import { FILE_WARNING } from '../utils';
import { definePackage } from './types';

export default definePackage({
	name: 'react',
	file_ext: 'tsx',
	import_ext: '',
	prettier_parser: 'typescript',

	generate(svg, name_pascal, type) {
		svg = svg
			.replace('<svg', '<svg ref={ref}')
			.replaceAll('class=', 'className=')
			.replaceAll('stroke-width=', 'strokeWidth=')
			.replaceAll('stroke-linecap=', 'strokeLinecap=')
			.replaceAll('stroke-linejoin=', 'strokeLinejoin=')
			.replace(
				'className="obra-icon"',
				"{...props} className={`obra-icon ${props?.className || ''}`}",
			);

		const props_type = `${type == 'fill' ? 'Fill' : 'Stroke'}IconProps`;

		return `
		//${FILE_WARNING}

		import type { ${props_type} } from '../types';
		import React, { forwardRef } from 'react';

		const ${name_pascal} = forwardRef<SVGSVGElement, ${props_type}>(
			({ size = 24, color = 'currentColor', ${type == 'stroke' ? 'strokeWidth = 2,' : ''} ...props }, ref) => {
				return (
					${svg}
				);
			},
		);

		export default ${name_pascal};
		`;
	},

	additional_exports: [
		"export type { FillIconProps, StrokeIconProps } from './types';",
	],
});