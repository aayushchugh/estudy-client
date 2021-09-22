import React from 'react';

import { HSecondary, HTertiary, PPrimary } from './Typography';
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
			<HTertiary className='card-heading__heading'>{heading}</HTertiary>
			<PPrimary className='card-heading__para'>{para}</PPrimary>
		</div>
	);
}

export function CardPara({ className, para }) {
	return (
		<div className={`${className} card-para`}>
			<PPrimary className={`card-para__para`}>{para}</PPrimary>
		</div>
	);
}
