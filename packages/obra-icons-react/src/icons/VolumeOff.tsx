//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const VolumeOff = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-volume-off">
					<path
						className="oi-fill"
						d="M8.5 11.3283V14.0002H11.1719L17.0225 19.8508C16.9935 19.8685 16.9646 19.8866 16.9336 19.9015C16.5871 20.0681 16.1752 20.0216 15.875 19.7814L11.1484 16.0002H7.5C6.94772 16.0002 6.5 15.5525 6.5 15.0002V9.32831L8.5 11.3283ZM15.875 4.21893C16.1752 3.9788 16.5871 3.9323 16.9336 4.09881C17.2799 4.26539 17.5 4.61589 17.5 5.00018V14.6721L15.5 12.6721V7.08124L12.3936 9.56561L10.8281 8.00018H11.1484L15.875 4.21893Z"
						fill={color}
					/>
					<path
						className="oi-vector"
						d="M5 5L19 19"
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

export default VolumeOff;
