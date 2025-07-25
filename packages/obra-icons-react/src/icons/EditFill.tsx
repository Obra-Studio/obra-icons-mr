//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const EditFill = forwardRef<SVGSVGElement, FillIconProps>(
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
				<g className="oi-edit-fill">
					<path
						className="oi-fill"
						d="M18 11.4141L8.70703 20.707C8.5195 20.8946 8.26522 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.7348 3.10543 15.4805 3.29297 15.293L12.5859 6L18 11.4141ZM16.293 2.29297C16.6835 1.90244 17.3165 1.90244 17.707 2.29297L21.707 6.29297C22.0976 6.68349 22.0976 7.31651 21.707 7.70703L19.4141 10L14 4.58594L16.293 2.29297Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default EditFill;
