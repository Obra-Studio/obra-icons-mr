//! This file is automatically generated, please don't edit it directly.

import type { FillIconProps } from '../types';
import React, { forwardRef } from 'react';

const DeleteAltFill = forwardRef<SVGSVGElement, FillIconProps>(
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
				<g className="oi-delete-alt-fill">
					<path
						className="oi-fill"
						d="M14.9377 2.61072C15.9463 2.71309 16.7336 3.56441 16.7336 4.59998V6.33337H21.2004L21.302 6.33826C21.8064 6.38933 22.2004 6.8155 22.2004 7.33337C22.2004 7.85119 21.8064 8.27743 21.302 8.32849L21.2004 8.33337H20.887L19.1096 21.2719C18.9736 22.2619 18.1274 23.0002 17.1282 23.0004H6.87231C5.87293 23.0004 5.02689 22.2619 4.89087 21.2719L3.11353 8.33337H2.80005C2.2478 8.33337 1.80011 7.8856 1.80005 7.33337C1.80005 6.78109 2.24776 6.33337 2.80005 6.33337H7.26685V4.59998C7.26685 3.49541 8.16228 2.59998 9.26685 2.59998H14.7336L14.9377 2.61072ZM6.77173 20.2709L9.35571 17.764C9.52979 17.911 9.75461 18.0004 10.0002 18.0004C10.5523 18.0002 11 17.5524 11.0002 17.0004V16.1693L13.0002 14.2299V17.0004C13.0004 17.5525 13.4481 18.0004 14.0002 18.0004C14.5523 18.0002 15 17.5524 15.0002 17.0004V12.2894L18.8362 8.5697L18.8684 8.33337H5.13208L6.77173 20.2709ZM9.26685 6.33337H14.7336V4.59998H9.26685V6.33337Z"
						fill={color}
					/>
				</g>
			</svg>
		);
	},
);

export default DeleteAltFill;
