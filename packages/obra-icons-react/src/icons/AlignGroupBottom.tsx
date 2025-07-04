//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const AlignGroupBottom = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-align-group-bottom">
					<path
						className="oi-line"
						d="M2.5 19.5L20.5 19.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-box"
						d="M17.5 15.5L17.5 9.5C17.5 8.94772 17.0523 8.5 16.5 8.5L14.5 8.5C13.9477 8.5 13.5 8.94772 13.5 9.5L13.5 15.5C13.5 16.0523 13.9477 16.5 14.5 16.5H16.5C17.0523 16.5 17.5 16.0523 17.5 15.5Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-box"
						d="M9.5 15.5L9.5 5.5C9.5 4.94772 9.05229 4.5 8.5 4.5L6.5 4.5C5.94772 4.5 5.5 4.94771 5.5 5.5L5.5 15.5C5.5 16.0523 5.94772 16.5 6.5 16.5H8.5C9.05228 16.5 9.5 16.0523 9.5 15.5Z"
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

export default AlignGroupBottom;
