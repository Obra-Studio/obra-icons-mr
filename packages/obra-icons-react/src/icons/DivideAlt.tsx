//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const DivideAlt = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-divide-alt">
					<path
						className="oi-line"
						d="M18 6L6 18"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-dot"
						d="M6.98804 7H7.00004"
						stroke={color}
						strokeWidth={strokeWidth * 2}
						strokeLinecap="round"
					/>
					<path
						className="oi-dot"
						d="M17 17H17.012"
						stroke={color}
						strokeWidth={strokeWidth * 2}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default DivideAlt;
