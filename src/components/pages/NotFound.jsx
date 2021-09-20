import React from 'react';
import { HPrimary } from '../UiComponents/Typography';

import './notFound.scss';

function NotFound() {
	return (
		<div className='container'>
			<div className='content'>
				<HPrimary>404</HPrimary>
				<h3 className='text-center text-2xl'>Page Not Found</h3>
			</div>
		</div>
	);
}

export default NotFound;
