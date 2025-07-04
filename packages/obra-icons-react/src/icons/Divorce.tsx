//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Divorce = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-divorce">
					<path
						className="oi-vector"
						d="M3.96212 5.13087C6.04492 3.08968 9.4218 3.08968 11.5046 5.13087L12 5.6164L12.4955 5.13087C14.5783 3.08968 17.9551 3.08968 20.0379 5.13087C22.1207 7.17205 22.1207 10.4815 20.0379 12.5227L12 20.4L3.96212 12.5227C1.87933 10.4815 1.87933 7.17205 3.96212 5.13087Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M11.5 5L12.7639 7.00742C13.2069 7.71102 13.1684 8.61532 12.6672 9.27871L12.4109 9.61786C11.8719 10.3313 11.8719 11.3158 12.4109 12.0292L12.6672 12.3683C13.1684 13.0317 13.2069 13.936 12.7639 14.6396L11.5 16.6471"
						stroke={color}
						strokeWidth={strokeWidth}
					/>
				</g>
			</svg>
		);
	},
);

export default Divorce;
