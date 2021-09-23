import React from 'react';

import { HPrimary, PPrimary } from '../../../UiComponents/Typography';
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

				<PPrimary className='hero-section__sub-heading'>
					A single solution to all school needs
				</PPrimary>

				<a className='hero-section__btn' href='#class-section'>
					<BPrimary>Explore &rarr;</BPrimary>
				</a>
			</div>
		</section>
	);
}

export default Hero;
