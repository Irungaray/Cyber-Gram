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
									(register, { data, loading, error }) => {
										const onSubmit = ({ email, password }) => {
											const input = { email, password };
											const variables = { input }
											register({ variables })
												.then(activateAuth)
										}

										const errMsg = error && 'User already exists or there is a problem.';

										return (
											<UserForm
												onSubmit={onSubmit}
												title='Register'
												error={errMsg}
												disabled={loading}
											/>
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
