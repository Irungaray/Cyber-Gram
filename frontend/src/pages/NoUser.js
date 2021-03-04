import React from 'react';

import Context from '../Context';

import { UserForm } from '../Components/UserForm';

import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';

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

							<LoginMutation>
								{
									(login, { data, loading, error }) => {
										const onSubmit = ({ email, password }) => {
											const input = { email, password };
											const variables = { input }
											login({ variables })
												.then(activateAuth)
										}

										const errMsg = error && 'Wrong password or user not found.';

										return (
											<UserForm
												onSubmit={onSubmit}
												title='Login'
												error={errMsg}
												disabled={loading}
											/>
										)
									}
								}
							</LoginMutation>
						</>
					);
				}
			}
		</Context.Consumer>
	);
};
