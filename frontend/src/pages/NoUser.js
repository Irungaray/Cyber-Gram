import React from 'react';

import Context from '../Context';

export const NoUser = () => {
	return (
		<Context.Consumer>
			{
				({ activateAuth }) => {
					return (
						<form onSubmit={activateAuth}>
							<button>Login</button>
						</form>
					)
				}
			}
		</Context.Consumer>
	)
};
