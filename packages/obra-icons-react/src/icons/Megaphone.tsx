//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const Megaphone = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-megaphone">
					<path
						className="oi-vector"
						d="M20.2361 9C19.6868 8.38625 18.8885 8 18 8C17.6494 8 17.3128 8.06015 17 8.17071V13.7354C17.3763 13.9054 17.5603 14 18 14C18.8885 14 19.6868 13.6137 20.2361 13C20.7111 12.4692 21 11.7684 21 11C21 10.2316 20.7111 9.53076 20.2361 9Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						className="oi-vector"
						d="M17 19V3L10 7H4C3.44772 7 3 7.44772 3 8V14C3 14.5523 3.44772 15 4 15H10L17 19Z"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<rect
						className="oi-box"
						x="5"
						y="15"
						width="4"
						height="6"
						stroke={color}
						strokeWidth={strokeWidth}
						stroke-miterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		);
	},
);

export default Megaphone;
