//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const BoxFill = forwardRef<SVGSVGElement, FillIconProps>(
	({ size = 24, color = 'currentColor', ...props }, ref) => {
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
				<g className="oi-box-fill">
					<path
						className="oi-fill"
						d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default BoxFill;
