import React, { useState } from 'react';
import axios from 'axios';

import { TextField } from '@mui/material';

import { HSecondary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';

import './form.scss';

function Form() {
	return (
		<section className='contact-section'>
			<form className='form'>
				<HSecondary className='form__heading'>Contact us</HSecondary>

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
					label='Email'
					type='email'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='Subject'
					type='text'
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='Message'
					type='text'
					multiline
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					fullWidth
				/>

				<BPrimary type='submit'>Submit </BPrimary>
			</form>
		</section>
	);
}

export default Form;
