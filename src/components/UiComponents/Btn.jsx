import React from 'react';
import { Button } from '@material-ui/core';

import './btn.scss';

export function BPrimary({ children, className }) {
	return (
		<Button variant='contained' className={`btn-primary ${className}`}>
			{children}
		</Button>
	);
}
