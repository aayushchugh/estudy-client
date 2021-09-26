import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

import { HSecondary } from '../../../UiComponents/Typography';
import { CardPara } from '../../../UiComponents/Card';
import './samplePaper.scss';

function SamplePaper() {
	const [value, setValue] = useState(0);
	const handleTabs = (e, val) => {
		setValue(val);
	};

	return (
		<section className="section-notes">
			<HSecondary>SamplePaper</HSecondary>
			<CardPara className="section-notes__background">
				<Tabs
					className="section-notes__tabs"
					value={value}
					onChange={handleTabs}
				>
					<Tab label="science" className="section-notes__tab" />
					<Tab label="social science" className="section-notes__tab" />
					<Tab label="maths" className="section-notes__tab" />
				</Tabs>
				<TabPanel value={value} index={0}>
					<ul>
						<li className="chapter-name">
							Chapter 1: Chemical Reactions and Equations
						</li>
						<li className="chapter-name">Chapter 2: Acids, Bases and Salts</li>
						<li className="chapter-name">Chapter 3: Metals and Non-metals</li>
						<li className="chapter-name">
							Chapter 4: Carbon and its Compounds
						</li>
						<li className="chapter-name">
							Chapter 5: Periodic Classification of Elements
						</li>
						<li className="chapter-name">Chapter 6: Life Processes</li>
						<li className="chapter-name">
							Chapter 7: Control and Coordination
						</li>
					</ul>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ul>
						<li className="chapter-name"> Chapter 1: Power-sharing </li>
						<li className="chapter-name"> Chapter 2: Federalism </li>
						<li className="chapter-name">Chapter 3: Democracy and Diversity</li>
						<li className="chapter-name">
							Chapter 4: Gender, Religion and Caste
						</li>
						<li className="chapter-name">
							Chapter 5: Popular Struggles and Movements
						</li>
						<li className="chapter-name"> Chapter 6: Political Parties </li>
						<li className="chapter-name"> Chapter 7: Outcomes of Democracy </li>
						<li className="chapter-name">Chapter 8: Challenges to Democracy</li>
					</ul>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<ul>
						<li>ch -1 </li>
						<li>ch-2</li>
						<li>ch-33</li>
						<li>ch-600</li>
						<li>ch-10</li>
						<li>ch-11</li>
					</ul>
				</TabPanel>
			</CardPara>
		</section>
	);
}

function TabPanel({ children, value, index }) {
	return <div>{value === index && <div>{children}</div>}</div>;
}

export default SamplePaper;
