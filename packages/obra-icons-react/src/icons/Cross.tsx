//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Cross = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-cross">
					<path
						className="oi-vector"
						d="M5 9.28571C3.89543 9.28571 3 10.1811 3 11.2857V12.7143C3 13.8188 3.89543 14.7143 5 14.7143H9.28566V18.9999C9.28566 20.1045 10.1811 20.9999 11.2857 20.9999H12.7142C13.8188 20.9999 14.7142 20.1045 14.7142 18.9999V14.7143H19C20.1046 14.7143 21 13.8188 21 12.7143V11.2857C21 10.1811 20.1046 9.28571 19 9.28571H14.7142V4.99994C14.7142 3.89537 13.8188 2.99994 12.7142 2.99994H11.2857C10.1811 2.99994 9.28566 3.89537 9.28566 4.99994V9.28571H5Z"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
				</g>
			</svg>
		);
	},
);

export default Cross;
