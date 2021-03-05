import React from 'react';
import { Helmet } from 'react-helmet';

import Context from '../Context';

import { Button } from '../../src/Components/UserForm/styles';

export const User = () => {
	return (
		<>
			<Helmet>
				<title>Pets! - User</title>
				<meta name='description' content='Pet photos' />
			</Helmet>
			<Context.Consumer>
				{
					({ removeAuth }) => {
						return (
							<>
								<h1>User</h1>

								<Button onClick={removeAuth}>Logout</Button>
							</>
						);
					}
				}
			</Context.Consumer>
		</>
	);
};
