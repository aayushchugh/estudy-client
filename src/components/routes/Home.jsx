import React from 'react';
import Hero from '../pages/home/hero/Hero';
import Features from '../pages/home/features/Features';
import About from '../pages/home/about/About';
import Class from '../pages/home/class/Class';
import Testimonials from '../pages/home/testimonials/Testimonials';
import Connect from '../pages/home/connect/Connect';

function Home() {
	return (
		<main>
			<Hero />
			<Features />
			<About />
			<Class />
			<Testimonials />
			<Connect />
		</main>
	);
}

export default Home;
