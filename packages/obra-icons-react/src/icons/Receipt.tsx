//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Receipt = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-receipt">
					<path
						className="oi-vector"
						d="M6 18V3L8.5 5L10.75 3L13 5L15.25 3L17.5 5L20 3V19.5C20 20.3284 19.3284 21 18.5 21V21C17.6716 21 17 20.3284 17 19.5V18H4V19C4 20.1046 4.89543 21 6 21H18.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M9.5 14.5H16.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-line"
						d="M9.5 11.5H16.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-line"
						d="M9.5 8.5H13"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default Receipt;
