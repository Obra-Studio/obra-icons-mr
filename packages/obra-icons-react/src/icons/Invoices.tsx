//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Invoices = forwardRef<SVGSVGElement, StrokeIconProps>(
	({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => {
		return (
			<svg
				ref={ref}
				width={size}
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				className={`obra-icon ${props?.className || ''}`}
			>
				<g className="oi-invoices">
					<path
						className="oi-line"
						d="M7 6.5L11 6.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M14 18.5L17 18.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<rect
						id="Rectangle 959"
						x="4"
						y="3.5"
						width="16"
						height="18"
						rx="2"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M13.75 15H15.5C16.6046 15 17.5 14.1046 17.5 13V12C17.5 10.8954 16.6046 10 15.5 10H13.75M13.75 15H9C7.89543 15 7 14.1046 7 13V12C7 10.8954 7.89543 10 9 10H13.75M13.75 15V10"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
				</g>
			</svg>
		);
	},
);

export default Invoices;
