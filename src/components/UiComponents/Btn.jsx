import React from 'react';
import { Button } from '@mui/material';

import './btn.scss';

export function BPrimary({ children, className, type, onClick }) {
	return (
		<Button
			variant='contained'
			type={type}
			className={`btn-primary ${className}`}
			onClick={onClick}
		>
			{children}
		</Button>
	);
}
