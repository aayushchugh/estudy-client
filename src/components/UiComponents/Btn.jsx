import React from 'react';

import './Btn.css';

export function BtnPrimary(props) {
	const ripple = e => {
		const circle = document.createElement('span');
		const diameter = Math.max(e.target.clientWidth, e.target.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${e.clientX - (e.target.offsetLeft + radius)}px`;
		circle.style.top = `${e.clientY - (e.target.offsetTop + radius)}px`;
		circle.classList.add('ripple');

		e.target.appendChild(circle);
	};

	return (
		<button
			onClick={ripple}
			type='button'
			className={` btn-primary bg-violet-500 text-white rounded-md px-4 py-2 transition-all duration-300 hover:opacity-90 relative overflow-hidden ${props.className}`}
		>
			{props.children}
		</button>
	);
}
