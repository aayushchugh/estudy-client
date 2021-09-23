import React from 'react';
import { Link } from 'react-router-dom';

import { TextField } from '@mui/material';

import { HSecondary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';
import './form.scss';

function Form() {
	return (
		<section className='signup-section'>
			<form className='form'>
				<HSecondary className='form__heading'>Signup</HSecondary>

				<TextField
					className='form__input'
					variant='outlined'
					label='Name'
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
					label='Password'
					type='password'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='confirm Password'
					type='password'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<BPrimary>Signup &rarr;</BPrimary>
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
