import React from 'react';

import { ListOfCategories } from './Components/ListOfCategories';
import { ListOfPhotoCards } from './Components/ListOfPhotoCards';

import { GlobalStyles } from './GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<ListOfCategories />
			<ListOfPhotoCards />
		</>
	);
};


export default App;

