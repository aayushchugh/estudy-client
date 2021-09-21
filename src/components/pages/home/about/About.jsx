import React from 'react';

import { BPrimary } from '../../../UiComponents/Btn';
import { HPrimary, PPrimary } from '../../../UiComponents/Typography';
import './about.scss';

function About() {
	return (
		<section className='about-section'>
			<div className='about-section__img'>
				<img src='/images/illustrations/about.svg' alt='about' />
			</div>

			<div className='about-section__content'>
				<HPrimary>Study material curated for You</HPrimary>

				<PPrimary className='about-section__para'>
					Have a look at the Hand-Crafted and Hand Written Content, especially
					designed from Student point of view, to now just cater knowledge, but
					also interest.
				</PPrimary>

				<BPrimary className='about-section__btn'>Explore &rarr; </BPrimary>
			</div>
		</section>
	);
}

export default About;
