//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const ShoppingBasket = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-shopping-basket">
					<path
						className="oi-box"
						d="M7.00002 3H17L20 7H4.00002L7.00002 3Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-box"
						d="M4 7H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V7Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.50002 12.933 8.50002 11"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		);
	},
);

export default ShoppingBasket;
