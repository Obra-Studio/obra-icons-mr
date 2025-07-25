//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const CircleForward = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-circle-forward">
					<circle
						className="oi-ellipse"
						cx="12"
						cy="12.0001"
						r="9"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
					<path
						className="oi-vector"
						d="M16 10L11 10C9.34315 10 8 11.3431 8 13C8 14.6569 9.34315 16 11 16H12"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-incomplete-triangle"
						d="M14 12L16 10L14 8"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		);
	},
);

export default CircleForward;
