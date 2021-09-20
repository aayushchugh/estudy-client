import React from 'react';
import { Typography } from '@mui/material';

import './typography.scss';

export function HPrimary({ children, className }) {
	return (
		<Typography variant='h1' className={`heading-primary ${className}`}>
			{children}
		</Typography>
	);
}

export function PPrimary({ className, children }) {
	return (
		<Typography variant='h2' className={`heading-secondary ${className}`}>
			{children}
		</Typography>
	);
}
