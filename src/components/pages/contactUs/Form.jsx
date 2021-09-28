import React, { useState } from 'react';
import axios from 'axios';

import { TextField } from '@mui/material';

import { HSecondary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';
import { ASuccess, AError } from '../../UiComponents/Alerts';

import './form.scss';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const formHandler = e => {
		e.preventDefault();

		axios
			.post(`${process.env.REACT_APP_API_URL}/contact-us/new`, {
				name: name,
				email: email,
				subject: subject,
				message: message,
			})
			.then(data => {
				if (data.data.status === 204) {
					document
						.querySelector('.form__alert--success')
						.classList.remove('hidden');
				} else if (data.data.status === 400) {
					document
						.querySelector('.form__alert--error')
						.classList.remove('hidden');
				}
			});

		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};

	return (
		<section className='contact-section'>
			<form className='form' onSubmit={formHandler}>
				<ASuccess className='form__alert--success hidden'>
					Thanks for contacting. You will be contacted within 24 hours
				</ASuccess>

				<AError className='form__alert--error hidden'>
					wait for your previous message to be closed
				</AError>

				<HSecondary className='form__heading'>Contact us</HSecondary>

				<TextField
					className='form__input'
					variant='outlined'
					label='Name'
					type='text'
					value={name}
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					onChange={e => setName(e.target.value)}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='Email'
					type='email'
					value={email}
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					onChange={e => setEmail(e.target.value)}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='Subject'
					type='text'
					value={subject}
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					onChange={e => setSubject(e.target.value)}
					fullWidth
				/>

				<TextField
					className='form__input'
					variant='outlined'
					label='Message'
					type='text'
					value={message}
					multiline
					inputProps={{ style: { fontSize: 20 } }}
					InputLabelProps={{ style: { fontSize: 20 } }}
					onChange={e => setMessage(e.target.value)}
					fullWidth
				/>

				<BPrimary type='submit'>Submit</BPrimary>
			</form>
		</section>
	);
}

export default Form;
