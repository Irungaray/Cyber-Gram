import React from 'react';
import { Router } from '@reach/router';

import { Logo } from './Components/Logo';
import { Navbar } from './Components/Navbar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

import { GlobalStyles } from './styles/GlobalStyles';

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

			<Navbar />
		</>
	);
};


export default App;

