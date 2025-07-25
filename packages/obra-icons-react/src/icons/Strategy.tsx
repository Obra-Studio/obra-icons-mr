//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Strategy = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-strategy">
					<path
						className="oi-ellipse"
						d="M7.125 20.25C8.57475 20.25 9.75 19.0747 9.75 17.625C9.75 16.1753 8.57475 15 7.125 15C5.67525 15 4.5 16.1753 4.5 17.625C4.5 19.0747 5.67525 20.25 7.125 20.25Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M4.5 6.75L8.25 10.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M8.25 6.75L4.5 10.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M17.25 15.75L21 19.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-line"
						d="M21 15.75L17.25 19.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-incomplete-triangle"
						d="M13.5 7.5V3.75H17.25"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M13.5 3.75L15 5.25C18.75 9 15.75 13.5 12.75 14.25"
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

export default Strategy;
