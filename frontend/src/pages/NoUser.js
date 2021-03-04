import React from 'react';

import Context from '../Context';

import { UserForm } from '../Components/UserForm';

import { RegisterMutation } from '../containers/RegisterMutation';

export const NoUser = () => {
	return (
		<Context.Consumer>
			{
				({ activateAuth }) => {
					return (
						<>
							<RegisterMutation>
								{
									(register) => {
										const onSubmit = ({ email, password }) => {
											const input = { email, password };
											const variables = { input }
											register({ variables })
												.then(activateAuth)
										}

										return (
											<UserForm onSubmit={onSubmit} title='Register' />
										)
									}
								}
							</RegisterMutation>

							<UserForm onSubmit={activateAuth} title='Login' />
						</>
					);
				}
			}
		</Context.Consumer>
	);
};
