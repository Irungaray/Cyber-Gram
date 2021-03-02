import React from 'react';

import { Logo } from './Components/Logo'
import { ListOfCategories } from './Components/ListOfCategories';

import { ListOfPhotoCards } from './containers/ListOfPhotoCards';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';


import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search);
	const detailId = urlParams.get('detail');

	// console.log(detailId)

	return (
		<>
			<GlobalStyles />
			<Logo />
			{
				detailId
					? <PhotoCardWithQuery id={detailId} />
					: <>
						<ListOfCategories />
						<ListOfPhotoCards categoryId={1} />
					</>
			}
		</>
	);
};


export default App;

