import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Nav from './components/layout/nav/Nav';
import Footer from './components/layout/footer/Footer';

import Home from './components/routes/Home';
import Login from './components/routes/Login';
import Signup from './components/routes/Signup';
import NotFound from './components/pages/NotFound';
import Content from './components/routes/content';
import ContactUs from './components/routes/ContactUs';

function App() {
	return (
		<>
			<CssBaseline />
			<Router>
				<Nav />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>

					<Route path='/content' exact>
						<Content />
					</Route>

					<Route path='/login' exact>
						<Login />
					</Route>

					<Route path='/signup' exact>
						<Signup />
					</Route>

					<Route path='/contact-us' exact>
						<ContactUs />
					</Route>

					<Route path='/404' exact>
						<NotFound />
					</Route>

					<Redirect to='/404' />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
