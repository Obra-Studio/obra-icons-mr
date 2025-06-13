export interface BlogFrontmatter {
	title: string;
	date: string;
	tags?: string[];
}

export interface BlogMetadata {
	title: string;
	slug: string;
	date: Date;
	tags: string[];
	content: string;
}
