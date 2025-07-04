//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const NotificationOffFill = forwardRef<SVGSVGElement, FillIconProps>(
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
				<g className="oi-notification-off-fill">
					<path
						className="oi-fill"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M13.8539 3.24815C16.8202 4.06075 19 6.77582 19 10V14.6973L20.8321 17.4453C21.0366 17.7522 21.0557 18.1467 20.8817 18.4719C20.7077 18.797 20.3688 19 20 19H15.4646C15.2219 20.6962 13.7632 22 12 22C10.2368 22 8.77806 20.6962 8.53544 19H4C3.63121 19 3.29235 18.797 3.11833 18.4719C2.94431 18.1467 2.96338 17.7522 3.16795 17.4453L5 14.6973V10C5 6.77583 7.17983 4.06075 10.1461 3.24815C10.4433 2.51619 11.1614 2.00003 12 2.00003C12.8386 2.00003 13.5567 2.51619 13.8539 3.24815ZM12 20C11.3469 20 10.7913 19.5826 10.5854 19H13.4146C13.2087 19.5826 12.6531 20 12 20ZM4.35406 2.23663C4.77566 1.87989 5.40664 1.93247 5.76339 2.35408L20.5326 19.8086C20.8894 20.2302 20.8368 20.8612 20.4152 21.218C19.9936 21.5747 19.3626 21.5221 19.0058 21.1005L4.23661 3.64596C3.87987 3.22436 3.93245 2.59338 4.35406 2.23663Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default NotificationOffFill;
