import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import { Tabs, Tab } from '@mui/material';

import { HSecondary } from '../../../UiComponents/Typography';
import { CardPara } from '../../../UiComponents/Card';
import './pyq.scss';

function Pyq() {
	const [value, setValue] = useState(0);
	const [pyqs, setPyqs] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [activeSubject, setActiveSubject] = useState('');

	const { classTitle } = useParams();

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/pyq/get-all?class=${classTitle}&auth=${process.env.REACT_APP_API_AUTH}`
			)
			.then(data => {
				setPyqs(data.data.data);
			});

		axios
			.get(
				`${process.env.REACT_APP_API_URL}/subject/get-all?class=${classTitle}&auth=${process.env.REACT_APP_API_AUTH}`
			)
			.then(data => {
				setSubjects(data.data.data);
				setActiveSubject(data.data.data[0].title);
			});
		// eslint-disable-next-line
	}, []);

	const handleTabs = (e, val) => {
		setActiveSubject(e.target.innerText);
		setValue(val);
	};

	return (
		<section className='section-pyqs'>
			<HSecondary>Pyqs</HSecondary>
			<CardPara className='section-pyqs__background'>
				<Tabs
					className='section-pyqs__tabs'
					value={value}
					onChange={handleTabs}
					textColor='inherit'
					variant='scrollable'
					scrollButtons={false}
					allowScrollButtonsMobile
				>
					{subjects.map(subject => (
						<Tab
							label={subject.title}
							className='section-pyqs__tab'
							key={subject._id}
						/>
					))}
				</Tabs>

				{subjects.map((subject, i) => (
					<TabPanel value={value} index={i}>
						<ul key={subject._id}>
							{pyqs.map(pyq =>
								pyq.subjectTitle.toLowerCase() ===
								activeSubject.toLowerCase() ? (
									<li className='chapter-name' key={pyq._id}>
										{pyq.title}
									</li>
								) : (
									' '
								)
							)}
						</ul>
					</TabPanel>
				))}
			</CardPara>
		</section>
	);
}

function TabPanel({ children, value, index }) {
	return <div>{value === index && <div>{children}</div>}</div>;
}

export default Pyq;
