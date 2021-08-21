import React from 'react';
import { Link } from 'react-router-dom';
import {BtnPrimary} from '../../UiComponents/Btn';

document.body.addEventListener('click', e => {
	const dropDown = document.querySelectorAll('.nav-list-item__dropdown');

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
		<header className='border-b-2 border-violet-500'>
			<nav className='nav flex items-center justify-between px-10'>
				<Link to='/'>
					<div className='logo'>
						<img src='/images/logo.png' className='h-24' alt='logo' />
					</div>
				</Link>
				<ul className='nav-list w-2/6 flex items-center justify-around'>
					<li
						onClick={clickHandler}
						className='nav-list__item relative cursor-pointer transition-all duration-300 hover:text-violet-500'
					>
						<div className='flex'>
							<p>Study Material</p>
							<svg
								className='nav-list-item__down-arrow ml-1 fill-current'
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
						<ul className='nav-list-item__dropdown hidden  mt-4 absolute w-full text-center text-black bg-white shadow'>
							<li className='mt-0 py-1 px-2 transition-all duration-200 hover:bg-black hover:text-violet-500 hover:bg-opacity-5'>
								Class 9
							</li>
							<li className='mt-2 py-1 px-2 transition-all duration-200 hover:bg-black hover:text-violet-500 hover:bg-opacity-5'>
								Class 10
							</li>
							<li className='mt-2 py-1 px-2 transition-all duration-200 hover:bg-black hover:text-violet-500 hover:bg-opacity-5'>
								Class 11
							</li>
						</ul>
					</li>
					<li
						onClick={clickHandler}
						className='nav-list__item relative cursor-pointer transition-all duration-300 hover:text-violet-500'
					>
						<div className='flex'>
							<p>PYQ E-books</p>
							<svg
								className='nav-list-item__down-arrow ml-1 fill-current'
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
						<ul className='nav-list-item__dropdown hidden  mt-4 absolute w-full text-center text-black bg-white shadow'>
							<li className='mt-0 py-1 px-2 transition-all duration-200 hover:bg-black hover:text-violet-500 hover:bg-opacity-5'>
								Class 9
							</li>
							<li className='mt-2 py-1 px-2 transition-all duration-200 hover:bg-black hover:text-violet-500 hover:bg-opacity-5'>
								Class 10
							</li>
							<li className='mt-2 py-1 px-2 transition-all duration-200 hover:bg-black hover:text-violet-500 hover:bg-opacity-5'>
								Class 11
							</li>
						</ul>
					</li>
					<li className='nav-list__item'>
						<BtnPrimary>My Account</BtnPrimary>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
