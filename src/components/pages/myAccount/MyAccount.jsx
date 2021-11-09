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
import { MPrimary } from '../../UiComponents/Modal';
import { AError, ASuccess } from '../../UiComponents/Alerts';

import './myAccount.scss';
import axios from 'axios';

function MyAccount() {
	const [name, setName] = useState('');
	const [userClass, setUserClass] = useState('');
	const [password, setPassword] = useState('');
	let [resetPassword, setResetPassword] = useState('');
	const [id, setId] = useState('');
	const [open, setOpen] = useState(false);
	const [submit, setSubmit] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	useEffect(() => {
		const token = jwt.decode(localStorage.getItem('token'));

		if (!token) return (window.location = '/login');

		setName(token.name);
		setUserClass(token.class);
		setId(token.id);

		setSubmit(false);
	}, [submit]);

	const logoutHandler = () => {
		localStorage.removeItem('token');
		window.location = '/';
	};

	const submitHandler = id => {
		return () => {
			const updatePassword =
				resetPassword === ''
					? (resetPassword = undefined)
					: // eslint-disable-next-line
					  (resetPassword = resetPassword);

			axios
				.patch(
					`${process.env.REACT_APP_API_URL}/users/update/${id}?auth=${process.env.REACT_APP_API_AUTH}`,
					{
						name,
						userClass,
						updatePassword,
						userPassword: password,
					}
				)
				.then(data => {
					setSubmit(true);
					setOpen(false);

					if (data.data.status === 200) {
						localStorage.setItem('token', data.data.token);
						setSuccess(data.data.message);
						document
							.querySelector('.my-account-section__alert--success')
							.classList.remove('hidden');
					} else if (data.data.status === 400) {
						setError(data.data.message);
						document
							.querySelector('.my-account-section__alert--error')
							.classList.remove('hidden');
					}
				});
		};
	};

	return (
		<section className='my-account-section'>
			{/* modal */}
			<MPrimary
				className='my-account-section-modal'
				open={open}
				setOpen={setOpen}
			>
				<div className='my-account-section-modal__box'>
					<TextField
						variant='outlined'
						label='password'
						type='password'
						value={password}
						className='my-account-section-modal__input'
						onChange={e => setPassword(e.target.value)}
						inputProps={{ style: { fontSize: 20 } }}
						InputLabelProps={{ style: { fontSize: 20 } }}
						fullWidth
						required
					/>

					<BPrimary
						onClick={submitHandler(id)}
						className='my-account-section-modal__btn'
					>
						Save
					</BPrimary>
				</div>
			</MPrimary>

			{/* alerts */}

			<ASuccess className='my-account-section__alert my-account-section__alert--success hidden'>
				{success}
			</ASuccess>

			<AError className='my-account-section__alert my-account-section__alert--error hidden'>
				{error}
			</AError>

			{/* top */}
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

			{/* bottom */}
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
							required
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
								value={userClass}
								className='my-account-section-form__select'
								onChange={e => setUserClass(e.target.value)}
								required
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
							value={resetPassword}
							className='my-account-section-form__input'
							onChange={e => setResetPassword(e.target.value)}
							inputProps={{ style: { fontSize: 20 } }}
							InputLabelProps={{ style: { fontSize: 20 } }}
							fullWidth
							required
						/>
					</div>

					<BPrimary
						className='my-account-section-form__btn'
						onClick={() => setOpen(true)}
					>
						Save
					</BPrimary>
				</form>
			</div>
		</section>
	);
}

export default MyAccount;
