import React from 'react';
import { Button } from '@mui/material';

import './btn.scss';

export function BPrimary({ children, className }) {
	return (
		<Button variant='contained' className={`btn-primary ${className}`}>
			{children}
		</Button>
	);
}
