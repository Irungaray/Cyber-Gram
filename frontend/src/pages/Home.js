import React from 'react';
import { Helmet } from 'react-helmet';

import { ListOfCategories } from '../Components/ListOfCategories';

import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';

export const Home = ({ id }) => {
	return (
		<>
			<Helmet>
				<title>Pets!</title>
				<meta name='description' content='Pet photos' />
			</Helmet>

			<ListOfCategories />
			<ListOfPhotoCards categoryId={id} />
		</>
	);
};