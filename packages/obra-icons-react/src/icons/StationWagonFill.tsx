//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const StationWagonFill = forwardRef<SVGSVGElement, FillIconProps>(
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
				<g className="oi-station-wagon-fill">
					<path
						className="oi-fill"
						d="M13.3594 5C14.7889 5 16.0212 6.00933 16.3018 7.41211L16.8193 10H19C20.6569 10 22 11.3431 22 13V16C22 16.5523 21.5523 17 21 17H18.8262C18.4141 18.1647 17.3059 19 16 19C14.6941 19 13.5859 18.1647 13.1738 17H9.82617C9.41406 18.1647 8.30585 19 7 19C5.69415 19 4.58594 18.1647 4.17383 17H3C2.44772 17 2 16.5523 2 16V11C2 10.9307 2.0071 10.8631 2.02051 10.7979L2.69824 7.41211C2.9788 6.00933 4.2111 5 5.64062 5H13.3594ZM7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17C7.55228 17 8 16.5523 8 16C8 15.4477 7.55228 15 7 15ZM16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15ZM5.64062 7C5.1635 7 4.75264 7.33689 4.65918 7.80371L4.21973 10H8.5V7H5.64062ZM10.5 10H14.7803L14.3408 7.80371C14.2474 7.33689 13.8365 7 13.3594 7H10.5V10Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default StationWagonFill;
