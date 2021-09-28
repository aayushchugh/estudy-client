import React from 'react';

import { Alert } from '@mui/material';

import './Alerts.scss';

export function AError({ className, children }) {
	const closeHandler = e => {
		const alertContainer = e.target.parentElement.parentElement.parentElement;
		if (
			alertContainer.tagName === 'DIV' &&
			!alertContainer.classList.contains('hidden')
		) {
			alertContainer.classList.add('hidden');
		}
	};

	return (
		<Alert
			onClose={closeHandler}
			className={`${className} alert`}
			severity='error'
		>
			{children}
		</Alert>
	);
}

export function ASuccess({ className, children }) {
	const closeHandler = e => {
		const alertContainer = e.target.parentElement.parentElement.parentElement;
		if (
			alertContainer.tagName === 'DIV' &&
			!alertContainer.classList.contains('hidden')
		) {
			alertContainer.classList.add('hidden');
		}
	};

	return (
		<Alert
			onClose={closeHandler}
			className={`${className} alert`}
			severity='success'
		>
			{children}
		</Alert>
	);
}
