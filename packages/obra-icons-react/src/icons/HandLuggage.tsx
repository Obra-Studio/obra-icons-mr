//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const HandLuggage = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-hand-luggage">
					<path
						className="oi-line"
						d="M9.5 11V14.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-line"
						d="M15 11V14.5"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-vector"
						d="M14.5 6C14.5 4.89543 13.4926 4 12.25 4C11.0074 4 10 4.89543 10 6"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-vector"
						d="M19.5 11C18.5 12 16.2541 13 12.25 13C8.24594 13 6 12 5 11"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-vector"
						d="M20.8369 19.3586L19.1227 7.35858C19.0523 6.86593 18.6304 6.5 18.1327 6.5H5.8673C5.36964 6.5 4.94772 6.86593 4.87735 7.35858L3.16306 19.3586C3.077 19.961 3.54446 20.5 4.15301 20.5H19.847C20.4555 20.5 20.923 19.961 20.8369 19.3586Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default HandLuggage;
