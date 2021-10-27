import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';
import { BPrimary } from '../../UiComponents/Btn';

import './nav.scss';

document.body.addEventListener('click', e => {
	const dropDown = document.querySelectorAll('.nav-list__dropdown');

	dropDown.forEach(el => {
		if (el.classList.contains('hidden')) return;
		else el.classList.add('hidden');
	});
});

function Nav() {
	const [response, setResponse] = useState([]);
	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/class/get-all?auth=${process.env.REACT_APP_API_AUTH}`
			)
			.then(data => {
				setResponse(data.data.data);
			});
	}, []);

	const clickHandler = e => {
		e.stopPropagation();
		const parent = e.target.parentElement.parentElement.children[1];
		if (parent.tagName === 'UL') parent.classList.toggle('hidden');
	};

	return (
		<header className='header'>
			<nav className='nav'>
				<Link to='/'>
					<div className='nav__logo'>
						<img src='/images/logo.png' alt='logo' />
					</div>
				</Link>

				<ul className='nav-list'>
					<li onClick={clickHandler} className='nav-list__item'>
						<div>
							<p>Notes </p>
							<ExpandMore />
						</div>

						<ul className='hidden nav-list__dropdown'>
							{response.map(c => (
								<li className='nav-list__dropdown-item'>
									<Link to={`/class/${c.title}`} key={c._id}>
										{c.title}
									</Link>
								</li>
							))}
						</ul>
					</li>

					<li onClick={clickHandler} className='nav-list__item'>
						<div>
							<p>Pyqs</p>
							<ExpandMore />
						</div>

						<ul className='hidden nav-list__dropdown'>
							{response.map(c => (
								<li className='nav-list__dropdown-item'>
									<Link to={`/class/${c.title}`} key={c._id}>
										{c.title}
									</Link>
								</li>
							))}
						</ul>
					</li>

					<li onClick={clickHandler} className='nav-list__item'>
						<div>
							<p>Ncert Solutions</p>
							<ExpandMore />
						</div>

						<ul className='hidden nav-list__dropdown'>
							{response.map(c => (
								<li className='nav-list__dropdown-item'>
									<Link to={`/class/${c.title}`} key={c._id}>
										{c.title}
									</Link>
								</li>
							))}{' '}
						</ul>
					</li>

					<li className='nav-list__item'>
						<Link to='/my-account' className='nav__link'>
							<BPrimary>My Account</BPrimary>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
