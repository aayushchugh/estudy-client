import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import { Tabs, Tab } from '@mui/material';

import { HSecondary } from '../../../UiComponents/Typography';
import { CardPara } from '../../../UiComponents/Card';
import './notes.scss';

/* 
	1) get notes of class
	2) get subject of class
	3) loop through subject and create tabs
	4) now in subjects check if note subjectTitle === subject title and than show on page
 */

function Notes() {
	const [value, setValue] = useState(0);
	const [notes, setNotes] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [activeSubject, setActiveSubject] = useState('');

	const { classTitle } = useParams();

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/notes/get-all?class=${classTitle}&auth=${process.env.REACT_APP_API_AUTH}`
			)
			.then(data => {
				setNotes(data.data.data);
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
		<section className='section-notes'>
			<HSecondary>Notes</HSecondary>
			<CardPara className='section-notes__background'>
				<Tabs
					className='section-notes__tabs'
					value={value}
					onChange={handleTabs}
				>
					{subjects.map(subject => (
						<Tab
							label={subject.title}
							className='section-notes__tab'
							key={subject._id}
						/>
					))}
				</Tabs>

				{subjects.map((subject, i) => (
					<TabPanel value={value} index={i}>
						<ul key={subject._id}>
							{notes.map(note =>
								note.subjectTitle.toLowerCase() ===
								activeSubject.toLowerCase() ? (
									<li className='chapter-name' key={note._id}>
										{note.title}
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

export default Notes;
