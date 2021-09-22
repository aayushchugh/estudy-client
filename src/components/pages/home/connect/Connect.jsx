import React from 'react';

import { TextField } from '@mui/material';
import { BPrimary } from '../../../UiComponents/Btn';
import { HPrimary, HTertiary } from '../../../UiComponents/Typography';
import './connect.scss';

function Connect() {
	return (
		<section className='connect-section'>
			<HPrimary>Let's Connect {':)'}</HPrimary>

			<div className='connect-section__container'>
				<img
					className='connect-section__img'
					src='/images/illustrations/feather.svg'
					alt='feather'
				/>

				<div className='connect-section__content'>
					<form className='connect-section-form'>
						<HTertiary className='connect-section-form__heading'>
							SIGN UP FOR UPDATES
						</HTertiary>
						<TextField
							className='connect-section-form__input'
							variant='outlined'
							label='Name Folks'
							type='text'
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							fullWidth
						/>
						<TextField
							className='connect-section-form__input'
							variant='outlined'
							label='email'
							type='email'
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							fullWidth
						/>
						<TextField
							className='connect-section-form__input'
							variant='outlined'
							label='Enter Your Class'
							type='number'
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							fullWidth
						/>
						<BPrimary>SIGN UP</BPrimary>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Connect;
