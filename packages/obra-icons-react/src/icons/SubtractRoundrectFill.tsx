//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const SubtractRoundrectFill = forwardRef<SVGSVGElement, FillIconProps>(
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
				<g className="oi-subtract-roundrect-fill">
					<path
						className="oi-fill"
						d="M18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4823 16.6067 11.0562 16.1025 11.0049L16 11H8Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default SubtractRoundrectFill;
