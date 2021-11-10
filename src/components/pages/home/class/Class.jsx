import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { default as jwt } from 'jsonwebtoken';

import { HPrimary } from '../../../UiComponents/Typography';
import { CardHeading } from '../../../UiComponents/Card';
import './class.scss';

function Class() {
	const [response, setResponse] = useState([]);

	const token = jwt.decode(localStorage.getItem('token'));

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/class/get-all?auth=${process.env.REACT_APP_API_AUTH}`
			)
			.then(data => {
				setResponse(data.data.data);
			});
	}, []);

	return (
		<section className='class-section' id='class-section'>
			<HPrimary className='class-section__heading'>Study Material For</HPrimary>

			<div className='class-section__class'>
				{response.map(data => (
					<Link
						to={token ? `/class/${data.title}` : '/login'}
						className='class-section__link'
						key={data._id}
					>
						<CardHeading
							className='class-section__card'
							heading={data.title}
							para={data.description}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}

export default Class;
