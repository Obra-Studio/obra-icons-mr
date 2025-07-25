//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Server = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-server">
					<path
						className="oi-vector"
						d="M20.0004 2H4.0004C2.89583 2 2.0004 2.89543 2.0004 4V8C2.0004 9.10457 2.89583 10 4.0004 10H20.0004C21.105 10 22.0004 9.10457 22.0004 8V4C22.0004 2.89543 21.105 2 20.0004 2Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M20.0004 14H4.0004C2.89583 14 2.0004 14.8954 2.0004 16V20C2.0004 21.1046 2.89583 22 4.0004 22H20.0004C21.105 22 22.0004 21.1046 22.0004 20V16C22.0004 14.8954 21.105 14 20.0004 14Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-mini-dot"
						d="M6.00012 6H6.01012"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-mini-dot"
						d="M6.00012 18H6.01012"
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

export default Server;
