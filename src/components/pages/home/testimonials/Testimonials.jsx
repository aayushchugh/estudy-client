import React from 'react';
import StarIcon from '@mui/icons-material/Star';

import {
	HPrimary,
	HSecondary,
} from '../../../../components/UiComponents/Typography';
import { CardPara } from '../../../UiComponents/Card';
import './testimonials.scss';

function Testimonials() {
	return (
		<section className='testimonial-section'>
			<HPrimary>Testimonials</HPrimary>
			<div className='testimonial-section__testimonials-container'>
				<div className='testimonial-section__testimonial'>
					<CardPara>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia,molestiae quas vel sint commodi repudiandae consequuntur
						blanditiis harum.
					</CardPara>

					<div className='testimonial-section__stars'>
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
					</div>

					<HSecondary className='testimonial-section__name'>Bhavya</HSecondary>
				</div>

				<div className='testimonial-section__testimonial'>
					<CardPara>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia,molestiae quas vel sint commodi repudiandae consequuntur
						blanditiis harum.
					</CardPara>

					<div className='testimonial-section__stars'>
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--unfilled' />
					</div>

					<HSecondary className='testimonial-section__name'>Ayush</HSecondary>
				</div>

				<div className='testimonial-section__testimonial'>
					<CardPara>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia,molestiae quas vel sint commodi repudiandae consequuntur
						blanditiis harum.
					</CardPara>

					<div className='testimonial-section__stars'>
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--filled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--unfilled' />
						<StarIcon className='testimonial-section__star testimonial-section__star--unfilled' />
					</div>

					<HSecondary className='testimonial-section__name'>Arpit</HSecondary>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
