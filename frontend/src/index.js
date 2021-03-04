import React from 'react';
import ReactDOM from 'react-dom';
import ApolloCLient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Context from './Context';
import App from './App';

const client = new ApolloCLient({
	uri: 'https://petgram-server-clgg.vercel.app/graphql',
	request: operation => {
		const token = window.sessionStorage.getItem('token');
		const authorization = token ? `Bearer ${token}` : '';

		operation.setContext({
			headers: {
				authorization
			}
		})
	},
	onError: error => {
		const { networkError } = error;

		if (networkError && networkError.result.code === 'invalid_token') {
			window.sessionStorage.removeItem('token')
		}
	}
});

ReactDOM.render(
	<Context.Provider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Context.Provider>,
	document.getElementById('root')
);