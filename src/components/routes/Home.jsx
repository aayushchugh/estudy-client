import React from 'react';
import Hero from '../pages/home/hero/Hero';
import Features from '../pages/home/features/Features';
import About from '../pages/home/about/About';
import Class from '../pages/home/class/Class';

function Home() {
	return (
		<main>
			<Hero />
			<Features />
			<About />
			<Class />
		</main>
	);
}

export default Home;
