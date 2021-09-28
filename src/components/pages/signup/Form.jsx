import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { TextField } from '@mui/material';

import { HSecondary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';
import { AError } from '../../UiComponents/Alerts';
import './form.scss';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleForm = async e => {
		e.preventDefault();

		if (password === confirmPassword) {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/signup`,
				{
					name: name,
					email: email,
					password: password,
				}
			);

			if (response.data.status === 400) {
				document
					.querySelector('.form__alert--email-exists')
					.classList.remove('hidden');
			} else {
				window.location = '/login';
			}
		} else {
			document
				.querySelector('.form__alert--password-not-match')
				.classList.remove('hidden');
		}
	};

	return (
		<section className='signup-section'>
			<form className='form' onSubmit={handleForm}>
				<HSecondary className='form__heading'>Signup</HSecondary>

				<TextField
					className='form__input'
					variant='outlined'
					label='Name'
					type='text'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
					onChange={e => setName(e.target.value)}
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='email'
					type='email'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
					onChange={e => setEmail(e.target.value)}
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='Password'
					type='password'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
					onChange={e => setPassword(e.target.value)}
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='confirm Password'
					type='password'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
					onChange={e => setConfirmPassword(e.target.value)}
				/>

				<AError className='form__alert form__alert--password-not-match hidden'>
					password and confirm password do not match
				</AError>

				<AError className='form__alert form__alert--email-exists hidden'>
					Email already exists, please login
				</AError>

				<BPrimary type='submit'>Signup &rarr;</BPrimary>
			</form>

			<h2 className='signup-section__heading'>
				Already have account
				<Link className='signup-section__link' to='/login'>
					Login
				</Link>
			</h2>
		</section>
	);
}

export default Form;
