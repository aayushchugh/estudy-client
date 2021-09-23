import React from 'react';

import { HPrimary } from '../../../UiComponents/Typography';
import { CardHeading } from '../../../UiComponents/Card';
import './class.scss';

function Class() {
	return (
		<section className='class-section' id='class-section'>
			<HPrimary className='class-section__heading'>Study Material For</HPrimary>

			<div className='class-section__class'>
				<CardHeading
					className='class-section__card'
					heading='class 9'
					para='9thie? Just entered the world of Physics, Chemistry and Bio from Science? We got you covered!'
				/>

				<CardHeading
					className='class-section__card'
					heading='class 10'
					para='Is saal pehli boards dunga, tuadi preparation preparation, saadi preparation halwa?'
				/>

				<CardHeading
					className='class-section__card'
					heading='class 11'
					para="We understand this class, so we won't talk much about it. We hope you get that. :')"
				/>
			</div>
		</section>
	);
}

export default Class;
