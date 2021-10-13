import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { HPrimary } from '../../../UiComponents/Typography';
import { CardHeading } from '../../../UiComponents/Card';
import './class.scss';

function Class() {
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

	return (
		<section className='class-section' id='class-section'>
			<HPrimary className='class-section__heading'>Study Material For</HPrimary>

			<div className='class-section__class'>
				{response.map(data => (
					<CardHeading
						className='class-section__card'
						heading={data.title}
						para={data.description}
					/>
				))}
			</div>
		</section>
	);
}

export default Class;
