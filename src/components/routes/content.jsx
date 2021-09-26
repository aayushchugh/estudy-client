import React from 'react';
import Notes from '../pages/content/notes/Notes';
import Pyq from '../pages/content/pyq/Pyq';
import SamplePaper from '../pages/content/sample_paper/SamplePaper';

function Content() {
	return (
		<main>
      <Notes />
      <Pyq />
      <SamplePaper/>
		</main>
	);
}

export default Content;
