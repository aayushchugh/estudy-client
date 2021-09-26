import React, { useEffect, useState } from 'react';
import axios from 'axios';

import StarIcon from '@mui/icons-material/Star';

import {
	HPrimary,
	HSecondary,
} from '../../../../components/UiComponents/Typography';
import { CardPara } from '../../../UiComponents/Card';
import './testimonials.scss';

function Testimonials() {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/testimonial/all-testimonials`)
			.then(data => {
				setApiData(data.data.data);
			});
	}, []);

	return (
		<section className='testimonial-section'>
			<HPrimary>Testimonials</HPrimary>
			<div className='testimonial-section__testimonials-container'>
				{apiData.map(testimonial => (
					<div
						className='testimonial-section__testimonial'
						key={testimonial._id}
					>
						<CardPara>{testimonial.content}</CardPara>

						<div className='testimonial-section__stars'>
							{[...Array(Number(5)).keys()].map(el => (
								<>
									{el < Number(testimonial.rating) ? (
										<>
											<StarIcon
												key={el}
												className='testimonial-section__star testimonial-section__star--filled'
											/>
											{console.log('if')}
										</>
									) : (
										<StarIcon
											key={el}
											className='testimonial-section__star testimonial-section__star--unfilled'
										/>
									)}
								</>
							))}
						</div>

						<HSecondary className='testimonial-section__name'>
							{testimonial.name}
						</HSecondary>
					</div>
				))}
			</div>
		</section>
	);
}

export default Testimonials;
