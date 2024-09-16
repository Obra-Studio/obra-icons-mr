import { FILE_WARNING } from './utils';

export interface Package {
	name: string;
	file_ext: string;
	prettier_parser: string;
	generate: (
		svg_template: string,
		name_pascal: string,
		type: 'stroke' | 'fill',
	) => string;
	additional_exports?: string[];
}

export const svelte: Package = {
	name: 'svelte',
	file_ext: 'svelte',
	prettier_parser: 'svelte',
	generate(svg, name_pascal, type) {
		return `
		<!-- ${FILE_WARNING} -->

        <script lang="ts">
            export let size = 24
            export let color = 'currentColor'
            ${type == 'stroke' ? 'export let strokeWidth = 2' : ''}
        </script>

        ${svg}
        `;
	},
};

export const react: Package = {
	name: 'react',
	file_ext: 'tsx',
	prettier_parser: 'typescript',
	generate(svg, name_pascal, type) {
		svg = svg
			.replace(/class=/g, 'className=')
			.replace('<svg', '<svg ref={ref}')
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
};
