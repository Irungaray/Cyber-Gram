import React from 'react';

import Context from '../Context';

import { UserForm } from '../Components/UserForm';

export const NoUser = () => {
	return (
		<Context.Consumer>
			{
				({ activateAuth }) => {
					return (
						<>
							<UserForm onSubmit={activateAuth} title='Register' />
							<UserForm onSubmit={activateAuth} title='Login' />
						</>
					);
				}
			}
		</Context.Consumer>
	);
};
