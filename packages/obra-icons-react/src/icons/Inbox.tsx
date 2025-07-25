//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Inbox = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-inbox">
					<path
						className="oi-vector"
						d="M22.0004 12H16.0004L14.0004 15H10.0004L8.00038 12H2.00038"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M5.45038 5.11L2.00038 12V18C2.00038 18.5304 2.2111 19.0391 2.58617 19.4142C2.96124 19.7893 3.46995 20 4.00038 20H20.0004C20.5308 20 21.0395 19.7893 21.4146 19.4142C21.7897 19.0391 22.0004 18.5304 22.0004 18V12L18.5504 5.11C18.3848 4.77679 18.1296 4.49637 17.8133 4.30028C17.4971 4.10419 17.1325 4.0002 16.7604 4H7.24038C6.8683 4.0002 6.50365 4.10419 6.18743 4.30028C5.87121 4.49637 5.61596 4.77679 5.45038 5.11Z"
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

export default Inbox;
