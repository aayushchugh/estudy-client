import React from 'react';
import { HPrimary } from '../../../UiComponents/Typography';
import { BPrimary } from '../../../UiComponents/Btn';

export default function Features() {
	return (
		<section className='feature-section' >
			<div className='feature-section__content'>
				<HPrimary>What We Provide</HPrimary>
				<BPrimary>Explore &rarr;</BPrimary>
			</div>
			<div className='feature-section__img' >
				<img src='/images/illustrations/features.svg' alt='background' />
			</div>
		</section>
	);
}
