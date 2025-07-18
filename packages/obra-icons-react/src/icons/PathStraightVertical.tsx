//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const PathStraightVertical = forwardRef<SVGSVGElement, StrokeIconProps>(
	({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => {
		return (
			<svg
				ref={ref}
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				className={`obra-icon ${props?.className || ''}`}
			>
				<g className="oi-path-straight-vertical">
					<path
						className="oi-line"
						d="M7.8 5.40002V19.8"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-line"
						d="M15.6 5.40002V19.8"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default PathStraightVertical;
