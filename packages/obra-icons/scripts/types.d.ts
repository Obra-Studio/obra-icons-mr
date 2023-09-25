export interface GETImageResponse {
	err: string | null;
	images: Record<string, string>;
}

export interface GETNodesResponse {
	name: string;
	lastModified: string;
	thumbnailUrl: string;
	version: string;
	role: string;
	editorType: string;
	linkAccess: string;
	nodes: Record<string, Node>;
}

export interface Node {
	document: Document;
	components: Components;
	componentSets: ComponentSets;
	schemaVersion: number;
	styles: Styles;
}

export interface Document {
	id: string;
	name: string;
	type: string;
	scrollBehavior: string;
	blendMode: string;
	children: Children[];
	absoluteBoundingBox: AbsoluteBoundingBox2;
	absoluteRenderBounds: AbsoluteRenderBounds2;
	constraints: Constraints2;
	clipsContent: boolean;
	background: Background[];
	fills: Fill2[];
	strokes: any[];
	strokeWeight: number;
	strokeAlign: string;
	backgroundColor: BackgroundColor;
	effects: any[];
}

export interface Children {
	id: string;
	name: string;
	type: string;
	scrollBehavior: string;
	blendMode: string;
	absoluteBoundingBox: AbsoluteBoundingBox;
	absoluteRenderBounds: AbsoluteRenderBounds;
	constraints: Constraints;
	fills: Fill[];
	strokes: any[];
	strokeWeight: number;
	strokeAlign: string;
	effects: any[];
	characters?: string;
	style?: Style;
	layoutVersion?: number;
	characterStyleOverrides?: any[];
	styleOverrideTable?: StyleOverrideTable;
	lineTypes?: string[];
	lineIndentations?: number[];
	preserveRatio?: boolean;
}

export interface AbsoluteBoundingBox {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface AbsoluteRenderBounds {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface Constraints {
	vertical: string;
	horizontal: string;
}

export interface Fill {
	blendMode: string;
	type: string;
	color?: Color;
	scaleMode?: string;
	imageRef?: string;
}

export interface Color {
	r: number;
	g: number;
	b: number;
	a: number;
}

export interface Style {
	fontFamily: string;
	fontPostScriptName: any;
	fontWeight: number;
	textAutoResize: string;
	fontSize: number;
	textAlignHorizontal: string;
	textAlignVertical: string;
	letterSpacing: number;
	lineHeightPx: number;
	lineHeightPercent: number;
	lineHeightUnit: string;
}

export interface StyleOverrideTable {}

export interface AbsoluteBoundingBox2 {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface AbsoluteRenderBounds2 {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface Constraints2 {
	vertical: string;
	horizontal: string;
}

export interface Background {
	blendMode: string;
	type: string;
	color: Color2;
}

export interface Color2 {
	r: number;
	g: number;
	b: number;
	a: number;
}

export interface Fill2 {
	blendMode: string;
	type: string;
	color: Color3;
}

export interface Color3 {
	r: number;
	g: number;
	b: number;
	a: number;
}

export interface BackgroundColor {
	r: number;
	g: number;
	b: number;
	a: number;
}

export interface Components {}

export interface ComponentSets {}

export interface Styles {}
