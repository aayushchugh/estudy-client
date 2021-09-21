import React from 'react';
import {
	CardGiftcard,
	FileCopy,
	Lightbulb,
	MenuBook,
} from '@mui/icons-material';

import { HPrimary } from '../../../UiComponents/Typography';
import { BPrimary } from '../../../UiComponents/Btn';
import { CardIcon } from '../../../UiComponents/Card';
import './features.scss';

export default function Features() {
	return (
		<section className='feature-section'>
			<div className='feature-section__content'>
				<HPrimary>What We Provide</HPrimary>

				{/* cards */}
				<div className='feature-section__grid'>
					<CardIcon className='feature-section__card' icon={<CardGiftcard />}>
						Free access <br /> to everything
					</CardIcon>

					<CardIcon className='feature-section__card' icon={<FileCopy />}>
						One Page <br /> Notes
					</CardIcon>

					<CardIcon className='feature-section__card' icon={<MenuBook />}>
						Previous Year <br /> Solved Questions
					</CardIcon>

					<CardIcon className='feature-section__card' icon={<Lightbulb />}>
						Easy To <br /> Remember
					</CardIcon>
				</div>
				<BPrimary className='feature-section__btn'>Explore &rarr;</BPrimary>
			</div>
			<div className='feature-section__img'>
				<img src='/images/illustrations/features.svg' alt='background' />
			</div>
		</section>
	);
}
