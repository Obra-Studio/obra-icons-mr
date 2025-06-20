//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Prism = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-prism">
					<path
						className="oi-triangle"
						d="M10.9465 7.93137C11.4013 7.09753 12.5987 7.09753 13.0535 7.93137L17.032 15.2254C17.4682 16.025 16.8894 17 15.9785 17H8.02145C7.11058 17 6.5318 16.025 6.96798 15.2254L10.9465 7.93137Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M6 12H3"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M21.5 11.5H18.5"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M21.25 16L19.75 14.5"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M19.5 6.5L17 9"
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

export default Prism;
