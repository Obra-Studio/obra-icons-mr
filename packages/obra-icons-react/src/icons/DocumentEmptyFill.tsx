//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const DocumentEmptyFill = forwardRef<SVGSVGElement, FillIconProps>(
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
				<g className="oi-document-empty-fill">
					<path
						className="oi-fill"
						d="M13 1V8C13 8.55228 13.4477 9 14 9H21V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H13ZM20.6973 6.83887C20.7478 6.88808 20.7924 6.94224 20.8311 7H15V1.30078L20.6973 6.83887Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default DocumentEmptyFill;
