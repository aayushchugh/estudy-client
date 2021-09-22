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

export function HSecondary({ children, className }) {
	return (
		<Typography variant='h2' className={`heading-secondary ${className}`}>
			{children}
		</Typography>
	);
}

export function HTertiary({ children, className }) {
	return (
		<Typography variant='h2' className={`heading-tertiary ${className}`}>
			{children}
		</Typography>
	);
}

export function PPrimary({ className, children }) {
	return (
		<Typography variant='subtitle1' className={`para-primary ${className}`}>
			{children}
		</Typography>
	);
}
