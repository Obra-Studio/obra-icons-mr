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
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9H14C13.4477 9 13 8.55228 13 8V2ZM19.4286 7L15 2.69444V7H19.4286Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default DocumentEmptyFill;
