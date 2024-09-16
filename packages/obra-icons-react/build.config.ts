import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	declaration: true,
	entries: [
		{
			builder: 'mkdist',
			input: './src',
			outDir: './dist',
		},
	],
});
