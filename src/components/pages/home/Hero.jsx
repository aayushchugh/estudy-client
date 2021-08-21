import React from 'react';

import { HPrimary } from '../../UiComponents/Typography';
import { BtnPrimary } from '../../UiComponents/Btn';

const imgContainerStyles = {
	height: '38rem',
};

function Hero() {
	return (
		<section className='flex mt-9 items-center justify-around'>
			<div style={imgContainerStyles}>
				<img
					className='h-full w-full'
					src='/images/illustrations/hero.svg'
					alt='background'
				/>
			</div>

			<div className='flex flex-col justify-center'>
				<HPrimary className='text-7xl xl:text-6xl leading-normal xl:leading-normal'>
					We make Learning fun, <br /> Easy for all <br /> “Completely free”
				</HPrimary>

				<p className='text-2xl text-center mt-4'>
					A single solution to all school needs
				</p>

				<BtnPrimary className='self-end mt-5 mr-12'>Explore &rarr;</BtnPrimary>
			</div>
		</section>
	);
}

export default Hero;
