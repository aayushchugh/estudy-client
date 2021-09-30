import React, { useEffect, useState } from 'react';
import { default as jwt } from 'jsonwebtoken';

import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from '@mui/material';

import { HSecondary } from '../../UiComponents/Typography';
import { BPrimary } from '../../UiComponents/Btn';

import './myAccount.scss';

function MyAccount() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [userClass, setUserClass] = useState('');
	const [formClass, setFormClass] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const token = jwt.decode(localStorage.getItem('token'));

		if (!token) return (window.location = '/login');

		const nameFromToken = token.name;
		const emailFromToken = token.email;
		const classFromToken = token.class;

		setName(nameFromToken);
		setEmail(emailFromToken);
		setUserClass(classFromToken);
	}, []);

	const logoutHandler = () => {
		localStorage.removeItem('token');
		window.location = '/';
	};

	return (
		<section className='my-account-section'>
			<div className='my-account-section-top'>
				<HSecondary className='my-account-section-top__name'>{name}</HSecondary>

				<HSecondary className='my-account-section-top__class'>
					{userClass === 'undefined' ? 'null' : userClass}
				</HSecondary>

				<HSecondary
					className='my-account-section-top__logout'
					onClick={logoutHandler}
				>
					Logout &rarr;
				</HSecondary>
			</div>

			<div className='my-account-section-bottom'>
				<form className='my-account-section-form'>
					<div>
						<TextField
							variant='outlined'
							label='name'
							type='string'
							value={name}
							className='my-account-section-form__input'
							onChange={e => setName(e.target.value)}
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							fullWidth
						/>

						<FormControl
							fullWidth
							className='my-account-section-form__form-control my-account-section-form__input'
						>
							<InputLabel className='my-account-section-form__select-label'>
								Class
							</InputLabel>

							<Select
								label='Class'
								value={formClass}
								className='my-account-section-form__select'
								onChange={e => setFormClass(e.target.value)}
							>
								<MenuItem value='9'>9</MenuItem>

								<MenuItem value='10'>10</MenuItem>

								<MenuItem value='11'>11</MenuItem>
							</Select>
						</FormControl>

						<TextField
							variant='outlined'
							label='reset password'
							type='password'
							value={password}
							className='my-account-section-form__input'
							onChange={e => setPassword(e.target.value)}
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							fullWidth
						/>
					</div>

					<BPrimary type='submit' className='my-account-section-form__btn'>
						Save
					</BPrimary>
				</form>
			</div>
		</section>
	);
}

export default MyAccount;
