//! This file is automatically generated, please don't edit it directly.

import type { StrokeIconProps } from '../types';
import React, { forwardRef } from 'react';

const FavoriteOff = forwardRef<SVGSVGElement, StrokeIconProps>(
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
				<g className="oi-favorite-off">
					<path
						className="oi-fill"
						d="M7.54503 10.373L5.14855 10.7227L8.19835 13.6963C8.43204 13.9241 8.54012 14.2521 8.48742 14.5742L7.79992 18.7705L11.5314 16.792L11.6437 16.7402C11.9113 16.6382 12.2124 16.6559 12.4689 16.792L15.6515 18.4795L18.3351 21.1631C18.2705 21.2574 18.1918 21.3432 18.0958 21.4121C17.7872 21.6336 17.3797 21.6614 17.0441 21.4834L12.0001 18.8066L6.95617 21.4834C6.62057 21.6614 6.21302 21.6336 5.90441 21.4121C5.59588 21.1905 5.43975 20.8134 5.50109 20.4385L6.42785 14.7646L2.30187 10.7412C2.02938 10.4755 1.93134 10.0778 2.04894 9.71582C2.16657 9.35392 2.47998 9.08994 2.85656 9.03516L5.78136 8.60938L7.54503 10.373ZM12.0001 2.5C12.3789 2.5 12.7252 2.71396 12.8946 3.05273L15.4737 8.21094L21.1437 9.03516C21.5203 9.08993 21.8336 9.35392 21.9513 9.71582C22.0689 10.0778 21.9709 10.4755 21.6984 10.7412L17.5821 14.7539L16.1671 13.3389L18.8507 10.7227L14.6691 10.1143C14.3452 10.0671 14.0644 9.86495 13.9181 9.57227L12.0001 5.73633L10.8546 8.02637L9.36339 6.53516L11.1056 3.05273L11.1769 2.93164C11.3618 2.66368 11.6687 2.50001 12.0001 2.5Z"
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

export default FavoriteOff;
