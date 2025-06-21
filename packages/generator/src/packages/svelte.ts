import { FILE_WARNING } from '../utils';
import { definePackage } from './types';

export default definePackage({
	name: 'svelte',

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
});