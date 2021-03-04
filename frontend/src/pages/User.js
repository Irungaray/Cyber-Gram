import React from 'react';
import Context from '../Context';

import { Button } from '../../src/Components/UserForm/styles';

export const User = () => {
	return (
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
	);
};
