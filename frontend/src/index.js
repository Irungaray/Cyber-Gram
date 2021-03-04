import React from 'react';
import ReactDOM from 'react-dom';
import ApolloCLient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Context from './Context';
import App from './App';

const client = new ApolloCLient({
	uri: 'https://petgram-server-clgg.vercel.app/graphql'
});

ReactDOM.render(
	<Context.Provider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Context.Provider>,
	document.getElementById('root')
);