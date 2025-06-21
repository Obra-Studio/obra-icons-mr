import { join } from 'node:path';

export interface MinimalPackage {
	name: string;
	generate: (
		svg_template: string,
		name_pascal: string,
		type: 'stroke' | 'fill',
	) => string;
}

export interface Package extends MinimalPackage {
	file_ext: string;
	import_ext: string;
	prettier_parser: string;
	icon_path: string;
	barrel_path: string;
	additional_exports: string[];
}

export function definePackage(
	options: MinimalPackage & Partial<Package>,
): Package {
	const file_ext = options.file_ext ?? options.name;
	const icon_path =
		options.icon_path ??
		join(
			import.meta.dirname,
			`../../../obra-icons-${options.name}/src/icons`,
		);
	return {
		...options,
		file_ext,
		import_ext: options.import_ext ?? file_ext,
		prettier_parser: options.prettier_parser ?? options.name,
		icon_path,
		barrel_path: options.barrel_path ?? join(icon_path, '../index.ts'),
		additional_exports: options.additional_exports ?? [],
	};
}
