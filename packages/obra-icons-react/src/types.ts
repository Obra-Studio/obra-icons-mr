import { type SVGProps } from 'react';

export interface FillIconProps extends SVGProps<SVGSVGElement> {
	size?: number;
	color?: string;
}

export interface StrokeIconProps extends SVGProps<SVGSVGElement> {
	size?: number;
	color?: string;
	strokeWidth?: number;
}
