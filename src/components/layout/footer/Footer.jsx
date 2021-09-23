import React from 'react';

// import {ArrowForwardIosIcon} from '@mui/icons-materialArrowForwardIos';
import {
	EmailOutlined,
	FacebookOutlined,
	Instagram,
} from '@mui/icons-material';

import { PPrimary } from '../../UiComponents/Typography';
import './footer.scss';
import { Link } from 'react-router-dom';
function Footer() {
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
					<li className='footer__nav-item'>About us</li>
					<li className='footer__nav-item'>Privacy Policy</li>
					<li className='footer__nav-item'>Terms of Service</li>
					<li className='footer__nav-item'>Contact us</li>
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
