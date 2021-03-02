import React from 'react';

import { Logo } from './Components/Logo'
import { ListOfCategories } from './Components/ListOfCategories';

import { ListOfPhotoCards } from './containers/ListOfPhotoCards';

import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Logo />
			<ListOfCategories />
			<ListOfPhotoCards categoryId={1} />
		</>
	);
};


export default App;

