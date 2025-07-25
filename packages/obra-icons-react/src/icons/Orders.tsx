//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Orders = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-orders">
					<path
						className="oi-box"
						d="M3 7C3 6.44772 3.44772 6 4 6H16C16.5523 6 17 6.44772 17 7V21C17 21.5523 16.5523 22 16 22H4C3.44772 22 3 21.5523 3 21V7Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M7 4.5V4C7 3.44772 7.44772 3 8 3H20C20.5523 3 21 3.44772 21 4V18C21 18.5523 20.5523 19 20 19H18.5"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
					<path
						className="oi-line"
						d="M13 12L7 12"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M13 18L7 18"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M10 15L10 9"
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

export default Orders;
