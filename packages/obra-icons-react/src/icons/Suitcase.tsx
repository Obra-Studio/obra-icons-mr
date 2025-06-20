//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Suitcase = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-suitcase">
					<rect
						className="oi-box"
						x="6"
						y="5"
						width="12"
						height="15"
						rx="2"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
					<path
						className="oi-line"
						d="M10 8L14 8"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M8.5 20V21.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-line"
						d="M15.5 20V21.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-line"
						d="M12 3V5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default Suitcase;
