import React from 'react';

import { Modal } from '@mui/material';

import './modal.scss';

export function MPrimary({ open, setOpen, children, className }) {
	return (
		<Modal
			className={`${className} modal`}
			open={open}
			onClose={() => setOpen(false)}
		>
			<div className='modal__box'>{children}</div>
		</Modal>
	);
}
