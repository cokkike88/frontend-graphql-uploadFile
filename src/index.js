import React from 'react';
import ReactDOM from 'react-dom';
// import './css/bootstrap.min.css'
import App from './components/App';
import { ApolloProvider } from 'react-apollo';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

// ReactDOM.render(<App />, document.getElementById('root'));

const client = new ApolloClient({
    // uri: "http://localhost:7000/graphql",
    link: createUploadLink({uri:'http://localhost:3001/graphql'}),
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors}) => {
        console.log('graphQlErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
