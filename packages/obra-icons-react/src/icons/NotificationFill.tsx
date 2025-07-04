//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const NotificationFill = forwardRef<SVGSVGElement, FillIconProps>(
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
				<g className="oi-notification-fill">
					<path
						className="oi-fill"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M4.99997 10C4.99997 6.13401 8.13398 3 12 3C15.866 3 19 6.13401 19 10V14.6972L20.832 17.4453C21.0366 17.7522 21.0557 18.1467 20.8816 18.4719C20.7076 18.797 20.3688 19 20 19H3.99997C3.63118 19 3.29232 18.797 3.1183 18.4719C2.94428 18.1467 2.96335 17.7522 3.16792 17.4453L4.99997 14.6972V10Z"
						fill={color}
					/>
					<path
						className="oi-fill"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.49994 17.5C10.0522 17.5 10.4999 17.9477 10.4999 18.5C10.4999 19.3284 11.1715 20 11.9999 20C12.8284 20 13.4999 19.3284 13.4999 18.5C13.4999 17.9477 13.9477 17.5 14.4999 17.5C15.0522 17.5 15.4999 17.9477 15.4999 18.5C15.4999 20.433 13.9329 22 11.9999 22C10.0669 22 8.49994 20.433 8.49994 18.5C8.49994 17.9477 8.94765 17.5 9.49994 17.5Z"
						fill={color}
					/>
					<path
						className="oi-fill"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.99994 4C9.99994 2.89543 10.8954 2 11.9999 2C13.1045 2 13.9999 2.89543 13.9999 4C13.9999 4.55228 13.5522 5 12.9999 5C12.4477 5 11.9999 4.55228 11.9999 4C11.9999 4.55228 11.5522 5 10.9999 5C10.4477 5 9.99994 4.55228 9.99994 4Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default NotificationFill;
