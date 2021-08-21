import React from 'react';
import { Typography } from '@material-ui/core';

import './typography.scss';

export function HPrimary({ children, className }) {
	return (
		<Typography variant='h1' className={`heading-primary ${className}`}>
			{children}
		</Typography>
	);
}

export function HSecondary({ className, children }) {
	return (
		<Typography variant='h2' className={`heading-secondary ${className}`}>
			{children}
		</Typography>
	);
}
