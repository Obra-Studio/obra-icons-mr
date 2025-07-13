import { FILE_WARNING } from '../utils';
import { definePackage } from './types';

export default definePackage({
	name: 'vue',

	generate(svg, name_pascal, type) {
		return `
			<script>
			  // ${FILE_WARNING}
			  export default {
				name: '${name_pascal}',
				props: {
				  size: { type: Number, default: 24 },
				  color: { type: String, default: 'currentColor' },
				  ${type == 'stroke' ? 'strokeWidth: { type: Number, default: 2 },' : ''}
				},
			  };
			</script>
			
			<template>
				${svg.replaceAll(/([\w\-]+)=\{(.+?)\}/gm, ':$1="$2"')}
			</template>
        `;
	},
});
