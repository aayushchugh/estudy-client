import React from 'react';
import { Button } from '@mui/material';

import './btn.scss';

export function BPrimary({ children, className, type }) {
	return (
		<Button
			variant='contained'
			type={type}
			className={`btn-primary ${className}`}
		>
			{children}
		</Button>
	);
}
