//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const CaretRight = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-caret-right">
					<path
						className="oi-vector"
						d="M10 8.06752C10 7.6436 10.4944 7.41202 10.8201 7.68341L15.5391 11.6159C15.7789 11.8158 15.7789 12.1842 15.5391 12.3841L10.8201 16.3166C10.4944 16.588 10 16.3564 10 15.9325L10 8.06752Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
					/>
				</g>
			</svg>
		);
	},
);

export default CaretRight;
