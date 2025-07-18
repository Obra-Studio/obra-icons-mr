//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const DiningMenu = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-dining-menu">
					<path
						className="oi-box"
						d="M3 17C3 16.4477 3.44772 16 4 16H20C20.5523 16 21 16.4477 21 17V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V17Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M12 8V5M12 5H10.5M12 5H13.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-ellipse"
						d="M19 16C19 11.5817 15.866 8 12 8C8.13401 8 5 11.5817 5 16"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
				</g>
			</svg>
		);
	},
);

export default DiningMenu;
