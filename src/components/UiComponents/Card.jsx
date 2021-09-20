import React from 'react';

import { PPrimary } from './Typography';
import './card.scss';

function Card({ className, icon, children }) {
	return (
		<div className={`${className} card`}>
			<div className='card__icon'>{icon}</div>
			<PPrimary className='card__text'>{children}</PPrimary>
		</div>
	);
}

export default Card;
