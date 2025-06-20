//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Fire = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-fire">
					<path
						className="oi-vector"
						d="M11.5735 22C15.6465 22 20 21.505 20 15.09C20 11.982 19.254 9.452 17.763 7.5C16.3695 9.8335 15.337 11 14.665 11C13.657 11 14.665 7.955 13.4995 5.6455C12.7225 4.1055 11.344 2.8905 9.3645 2C9.6395 4.2185 9.58 5.8275 9.186 6.8275C8.594 8.3275 3.576 10.955 4.029 15.4675C4.4825 19.98 7.5 22 11.5735 22Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M10.854 12.004C8.95148 13.7335 8.14048 15.334 8.42148 16.8055C8.66298 18.0725 9.62448 18.688 10.3485 18.887C10.91 19.0405 11.882 19.127 12.75 18.3535C13.67 17.534 13.3035 16.3695 11.97 14.9285C11.407 14.321 11.035 13.346 10.854 12.004Z"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		);
	},
);

export default Fire;
