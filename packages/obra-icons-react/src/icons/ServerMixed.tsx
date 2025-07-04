//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const ServerMixed = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-server-mixed">
					<path
						className="oi-mini-dot"
						d="M6 18H6.01"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M20.0005 14H4.00049C2.89592 14 2.00049 14.8954 2.00049 16V20C2.00049 21.1046 2.89592 22 4.00049 22H20.0005C21.1051 22 22.0005 21.1046 22.0005 20V16C22.0005 14.8954 21.1051 14 20.0005 14Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-fill"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3 1C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H21C22.1046 11 23 10.1046 23 9V3C23 1.89543 22.1046 1 21 1H3ZM6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5H6.01C6.83843 7.5 7.51 6.82843 7.51 6C7.51 5.17157 6.83843 4.5 6.01 4.5H6Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default ServerMixed;
