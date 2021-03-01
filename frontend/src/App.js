import React from 'react';

import { Logo } from './Components/Logo'
import { ListOfCategories } from './Components/ListOfCategories';
import { ListOfPhotoCards } from './Components/ListOfPhotoCards';

import { GlobalStyles } from './GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Logo />
			<ListOfCategories />
			<ListOfPhotoCards />
		</>
	);
};


export default App;

