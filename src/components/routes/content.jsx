import React from 'react';
import { default as jwt } from 'jsonwebtoken';

import Notes from '../pages/content/notes/Notes';
import Pyq from '../pages/content/pyq/Pyq';
import SamplePaper from '../pages/content/sample_paper/SamplePaper';

function Content() {
	const token = localStorage.getItem('token');
	const user = jwt.decode(token);

	if (!user) window.location = '/login';

	return (
		<main>
			<Notes />
			<Pyq />
			<SamplePaper />
		</main>
	);
}

export default Content;
