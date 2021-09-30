import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
	EmailOutlined,
	FacebookOutlined,
	Instagram,
} from '@mui/icons-material';

import { PPrimary } from '../../UiComponents/Typography';

import './footer.scss';

function Footer() {
	const history = useHistory();

	const [location, setLocation] = useState(history.location.pathname);

	useEffect(() => {
		history.listen(location => {
			setLocation(location.pathname);
		});

		const footer = document.querySelector('.footer');
		footer.classList.remove('footer-fixed');

		if (window.innerHeight > document.body.scrollHeight) {
			document.querySelector('.footer').classList.add('footer-fixed');
		}
		//eslint-disable-next-line
	}, [location]);

	return (
		<footer className='footer'>
			<div className='footer__left'>
				<Link to='/'>
					<img className='footer__logo' src='/images/logo.png' alt='logo' />
				</Link>

				<PPrimary className='footer__para'>
					We are here to give a different perspective on the pattern of
					studying. We are here to help every student reach their goals.
				</PPrimary>
			</div>

			<nav className='footer__mid'>
				<ul className='footer__nav'>
					<li className='footer__nav-item'>
						<Link to='/contact-us'>Contact us</Link>
					</li>
					<li className='footer__nav-item'>About us</li>
					<li className='footer__nav-item'>Privacy Policy</li>
					<li className='footer__nav-item'>Terms of Service</li>
				</ul>
			</nav>

			<div className='footer__right'>
				<FacebookOutlined />
				<Instagram />
				<EmailOutlined />
			</div>
		</footer>
	);
}

export default Footer;
