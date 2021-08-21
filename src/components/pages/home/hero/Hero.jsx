import React from 'react';

import { HPrimary, HSecondary } from '../../../UiComponents/Typography';
import { BPrimary } from '../../../UiComponents/Btn';

import './hero.scss';

function Hero() {
	return (
		<section className='hero-section'>
			<div className='hero-section__img'>
				<img src='/images/illustrations/hero.svg' alt='background' />
			</div>

			<div className='hero-section__content'>
				<HPrimary className='hero-section__heading'>
					We make Learning fun, <br /> Easy for all <br /> “Completely free”
				</HPrimary>

				<HSecondary className='hero-section__sub-heading'>
					A single solution to all school needs
				</HSecondary>

				<BPrimary className='hero-section__btn mt-5 mr-12'>
					Explore &rarr;
				</BPrimary>
			</div>
		</section>
	);
}

export default Hero;
