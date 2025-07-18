//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Window = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-window">
					<path
						className="oi-box"
						d="M20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-box"
						d="M20 4H4C3.44772 4 3 4.44772 3 5V10H21V5C21 4.44772 20.5523 4 20 4Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-mini-dot"
						d="M6.19519 7H6.20719"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-mini-dot"
						d="M9.28001 7H9.29201"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default Window;
