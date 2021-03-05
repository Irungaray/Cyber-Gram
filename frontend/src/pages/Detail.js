import React from 'react';
import { Helmet } from 'react-helmet';

import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';

export const Detail = ({ detailId }) => {
	return (
		<>
			<Helmet>
				<title>Pets! - Details</title>
				<meta name='description' content='Pet photos' />
			</Helmet>

			<PhotoCardWithQuery id={detailId} />
		</>
	);
};