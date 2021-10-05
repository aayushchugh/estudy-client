import React, { useState } from 'react';
import axios from 'axios';

import { TextField } from '@mui/material';

import { BPrimary } from '../../../UiComponents/Btn';
import { HPrimary, HTertiary } from '../../../UiComponents/Typography';
import { ASuccess, AError } from '../../../UiComponents/Alerts';
import './connect.scss';

function Connect() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [userClass, setUserClass] = useState('');

	const submitHandler = e => {
		e.preventDefault();

		axios
			.post(
				`${process.env.REACT_APP_API_URL}/updateEmailList/add?auth=${process.env.REACT_APP_API_AUTH}`,
				{
					name: name,
					email: email,
					class: userClass,
				}
			)
			.then(data => {
				console.log(data.data);

				if (data.data.status === 201) {
					document
						.querySelector('.connect-section-form__alert--success')
						.classList.remove('hidden');
				} else if (
					data.data.status === 400 &&
					data.data.message === 'Email already exists'
				) {
					document
						.querySelector('.connect-section-form__alert--error-exists')
						.classList.remove('hidden');
				} else if (
					data.data.status === 400 &&
					data.data.message === 'Email looks fake'
				) {
					document
						.querySelector('.connect-section-form__alert--error-fake')
						.classList.remove('hidden');
				}

				setName('');
				setEmail('');
				setUserClass('');
			});
	};

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
					<form className='connect-section-form' onSubmit={submitHandler}>
						<ASuccess className='connect-section-form__alert connect-section-form__alert--success hidden'>
							You are successfully added to our mailing list
						</ASuccess>

						<AError className='connect-section-form__alert connect-section-form__alert--error-exists hidden'>
							Email already exists
						</AError>

						<AError className='connect-section-form__alert connect-section-form__alert--error-fake hidden'>
							Email looks fake
						</AError>

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
							onChange={e => setName(e.target.value)}
							value={name}
							fullWidth
						/>

						<TextField
							className='connect-section-form__input'
							variant='outlined'
							label='Email'
							type='email'
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							onChange={e => setEmail(e.target.value)}
							value={email}
							fullWidth
						/>

						<TextField
							className='connect-section-form__input'
							variant='outlined'
							label='Enter Your Class'
							type='number'
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							onChange={e => setUserClass(e.target.value)}
							value={userClass}
							fullWidth
						/>

						<BPrimary type='submit'>SIGN UP</BPrimary>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Connect;
