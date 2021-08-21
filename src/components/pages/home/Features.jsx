import React from 'react';
import { HPrimary } from '../../UiComponents/Typography';
import { BtnPrimary } from '../../UiComponents/Btn';

function Services() {
	return (
		<section>
			<div>
				<HPrimary>What We Provide</HPrimary>
				<BtnPrimary>Explore &rarr;</BtnPrimary>
			</div>
			<div>
				<img src='/images/illustrations/features.svg' alt='background' />
			</div>
		</section>
	);
}

export default Services;
