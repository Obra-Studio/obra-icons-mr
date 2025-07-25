//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const WarningTriangle = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-warning-triangle">
					<path
						className="oi-line"
						d="M11.8737 13.5L11.8737 9.97894"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-triangle"
						d="M10.8118 4.41764C11.2617 3.56283 12.4857 3.56283 12.9356 4.41764L20.4216 18.6411C20.8422 19.4402 20.2627 20.4 19.3597 20.4H4.38764C3.48462 20.4 2.90516 19.4402 3.32574 18.6411L10.8118 4.41764Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-mini-dot"
						d="M11.8736 16.6105H11.8825"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default WarningTriangle;
