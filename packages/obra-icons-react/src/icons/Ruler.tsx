//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Ruler = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-ruler">
					<path
						className="oi-box"
						d="M2.02728 16.4194L16.1694 2.27728L21.4727 7.58058L7.33058 21.7227L2.02728 16.4194Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="2.16568"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M18.2907 10.0554L15.8159 7.58057"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="2.16568"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M15.4623 12.8839L14.4016 11.8232"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="2.16568"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M12.6339 15.7123L10.159 13.2374"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="2.16568"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M9.80546 18.5408L8.7448 17.4801"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="2.16568"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		);
	},
);

export default Ruler;
