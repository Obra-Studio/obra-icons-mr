//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Yen = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-yen">
					<path
						className="oi-line"
						d="M7.45837 15.4211H16.7391"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-line"
						d="M7.45837 12.144H16.7391"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
					<path
						className="oi-vector"
						d="M6.89355 4L11.9866 12.2225M11.9866 12.2225L17.1064 4M11.9866 12.2225V20.8187"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
					/>
				</g>
			</svg>
		);
	},
);

export default Yen;
