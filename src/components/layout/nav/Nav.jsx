import React from 'react';
import { Link } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';
import { BPrimary } from '../../UiComponents/Btn';

import './nav.scss';

document.body.addEventListener('click', e => {
	const dropDown = document.querySelectorAll('.nav-dropdown');

	dropDown.forEach(el => {
		if (el.classList.contains('hidden')) return;
		else el.classList.add('hidden');
	});
});

function Nav() {
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
							<p>Study Material</p>
							<ExpandMore />
						</div>

						<ul className='hidden nav-dropdown'>
							<li className='mt-0'>Class 9</li>
						</ul>
					</li>
					<li onClick={clickHandler} className='nav-list__item'>
						<div>
							<p>Study Material</p>
							<ExpandMore />
						</div>

						<ul className='hidden nav-dropdown'>
							<li className='mt-0'>Class 9</li>
						</ul>
					</li>

					<li className='nav-list__item'>
						<BPrimary>My Account</BPrimary>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
