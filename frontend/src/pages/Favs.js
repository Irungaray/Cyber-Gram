import React from 'react';
import { Helmet } from 'react-helmet';

import { FavsWithQuery } from '../containers/GetFavorites';

export const Favs = () => {
	return (
		<>
			<Helmet>
				<title>Pets! - Favs</title>
				<meta name='description' content='Pet photos' />
			</Helmet>

			<h1>Favs</h1>

			<FavsWithQuery />
		</>
	);
};
