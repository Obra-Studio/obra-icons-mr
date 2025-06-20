//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const RocketShip = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-rocket-ship">
					<path
						className="oi-vector"
						d="M12 18C11.1716 18 10.5 18.8706 10.5 19.9444C10.5 21.3333 12 23 12 23C12 23 13.5 21.3333 13.5 19.9444C13.5 18.8706 12.8284 18 12 18Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-mini-dot"
						d="M12 8H12.01"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M10.5002 14.5H13.5002M10.5002 14.5L8 17.5L5 12.5L8.8391 11M10.5002 14.5C10.0451 13.9312 9.27938 12.6479 8.8391 11M13.5002 14.5C14.167 13.6667 15.5002 11.3 15.5002 8.5C15.5003 5.7 13.1667 3 12 2C10.8333 3 8.49992 5.7 8.5 8.5C8.50002 9.38871 8.63437 10.2338 8.8391 11M13.5002 14.5C13.9553 13.9312 14.7209 12.6479 15.1611 11L19 12.5L16 17.5L13.5002 14.5Z"
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

export default RocketShip;
