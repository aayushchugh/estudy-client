import React from 'react';
import { HPrimary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';

function Services() {
	return (
		<section>
			<div>
				<HPrimary>What We Provide</HPrimary>
				<BPrimary>Explore &rarr;</BPrimary>
			</div>
			<div>
				<img src='/images/illustrations/features.svg' alt='background' />
			</div>
		</section>
	);
}

export default Services;
