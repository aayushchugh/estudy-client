import React from 'react';
import { Link } from 'react-router-dom';

import { TextField } from '@mui/material';

import { HSecondary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';
import './form.scss';

function Form() {
	return (
		<section className='login-section'>
			<form className='form'>
				<HSecondary className='form__heading'>Login</HSecondary>

				<TextField
					className='form__input'
					variant='outlined'
					label='Name Folks'
					type='text'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='email'
					type='email'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='Enter Your Class'
					type='number'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<BPrimary>Login &rarr;</BPrimary>
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
