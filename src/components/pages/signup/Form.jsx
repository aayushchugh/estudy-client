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
	const [error, setError] = useState('');

	const handleForm = async e => {
		e.preventDefault();

		if (password === confirmPassword) {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/signup?auth=${process.env.REACT_APP_API_AUTH}`,
				{
					name: name,
					email: email,
					password: password,
				}
			);

			if (response.data.status === 400) {
				setError(response.data.message);
				document
					.querySelector('.form__alert--error')
					.classList.remove('hidden');
			} else {
				window.location = '/login';
			}
		} else {
			setError('Passwords do not match');
			document.querySelector('.form__alert--error').classList.remove('hidden');
		}
	};

	return (
		<section className='signup-section'>
			<AError className='form__alert form__alert--error hidden'>{error}</AError>

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
					required
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
					required
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
					required
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
					required
				/>

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
