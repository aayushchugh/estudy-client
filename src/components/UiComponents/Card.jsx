import React from 'react';

import { HSecondary, PPrimary } from './Typography';
import './card.scss';

export function CardIcon({ className, icon, children }) {
	return (
		<div className={`${className} card-icon`}>
			<div className='card-icon__img'>{icon}</div>
			<PPrimary className='card-icon__text'>{children}</PPrimary>
		</div>
	);
}

export function CardHeading({ className, heading, para }) {
	return (
		<div className={`${className} card-heading`}>
			<HSecondary className='card-heading__heading'>{heading}</HSecondary>
			<PPrimary className='card-heading__para'>{para}</PPrimary>
		</div>
	);
}
