import React from 'react';
import { Link } from 'react-router-dom';

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
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24px'
								viewBox='0 0 24 24'
								width='24px'
								fill='#000000'
							>
								<path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
								<path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
							</svg>
						</div>

						<ul className='hidden nav-dropdown'>
							<li className='mt-0'>Class 9</li>
						</ul>
					</li>
					<li onClick={clickHandler} className='nav-list__item'>
						<div>
							<p>Study Material</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24px'
								viewBox='0 0 24 24'
								width='24px'
								fill='#000000'
							>
								<path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
								<path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
							</svg>
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
