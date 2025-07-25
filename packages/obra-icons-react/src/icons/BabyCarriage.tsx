//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const BabyCarriage = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-baby-carriage">
					<path
						className="oi-medium-dot"
						d="M8.24146 21L8.24994 21.0085"
						stroke={color}
						strokeWidth={strokeWidth * 1.5}
						strokeLinecap="round"
					/>
					<path
						className="oi-medium-dot"
						d="M18 21L18.0085 21.0085"
						stroke={color}
						strokeWidth={strokeWidth * 1.5}
						strokeLinecap="round"
					/>
					<path
						className="oi-vector"
						d="M4.5 10.5H21.75C21.75 12.2902 21.0388 14.0071 19.773 15.273C18.5071 16.5388 16.7902 17.25 15 17.25H11.25C9.45979 17.25 7.7429 16.5388 6.47703 15.273C5.21116 14.0071 4.5 12.2902 4.5 10.5Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M13.5 10.5V4.5C13.5 4.30109 13.579 4.11032 13.7197 3.96967C13.8603 3.82902 14.0511 3.75 14.25 3.75H15C16.7902 3.75 18.5071 4.46116 19.773 5.72703C21.0388 6.9929 21.75 8.70979 21.75 10.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M1.5 7.5C2.29565 7.5 3.05871 7.81607 3.62132 8.37868C4.18393 8.94129 4.5 9.70435 4.5 10.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M13.5 10.5L19.6341 5.59216"
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

export default BabyCarriage;
