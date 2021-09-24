import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { TextField } from '@mui/material';

import { HSecondary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';
import './form.scss';

function Form() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleForm = async e => {
		e.preventDefault();

		const response = await axios.post(
			`${process.env.REACT_APP_API_URL}/login`,
			{
				email: email,
				password: password,
			}
		);

		if (response.data.status === 200) {
			localStorage.setItem('token', response.data.token);
			alert('logged in');
		} else {
			alert('not logged in');
		}

	};

	return (
		<section className='login-section'>
			<form className='form' onSubmit={handleForm}>
				<HSecondary className='form__heading'>Login</HSecondary>

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
					label='password'
					type='password'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
					onChange={e => setPassword(e.target.value)}
				/>

				<BPrimary type='submit'>Login &rarr;</BPrimary>
			</form>

			<h2 className='login-section__heading'>
				Don't have a Account Yet
				<Link className='login-section__link' to='/signup'>
					Register Now
				</Link>
			</h2>
		</section>
	);
}

export default Form;
