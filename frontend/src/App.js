import React from 'react';
import { Router } from '@reach/router';

import { Logo } from './Components/Logo';
import { Navbar } from './Components/Navbar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NoUser } from './pages/NoUser';

import { GlobalStyles } from './styles/GlobalStyles';

const UserLogged = ({ children }) => {
	return children({ isAuth: false });
};

const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search);
	const detailId = urlParams.get('detail');

	// console.log(detailId)

	return (
		<>
			<GlobalStyles />

			<Logo />

			<Router>
				<Home path='/' />
				<Home path='/pet/:id' />

				<Detail path='/detail/:detailId' />
			</Router>

			<UserLogged>
				{
					({ isAuth }) =>
						isAuth
							? <Router>
								<Favs path='/favs' />
								<User path='/user' />
							</Router>
							: <Router>
								<NoUser path='/favs' />
								<NoUser path='/user' />
							</Router>
				}
			</UserLogged>

			<Navbar />
		</>
	);
};

export default App;