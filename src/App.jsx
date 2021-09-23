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
import NotFound from './components/pages/NotFound';

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
					<Route path='/login' exact>
						<Login />
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
