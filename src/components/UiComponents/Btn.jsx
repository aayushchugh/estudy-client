import React from 'react';
import { Button } from '@material-ui/core';

import './Btn.scss';

export function BtnPrimary({ content, className }) {
	return (
		<Button variant='contained' className={`btn-primary ${className}`}>
			{content}
		</Button>
	);
}
