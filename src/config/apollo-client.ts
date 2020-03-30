import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-boost';
import { onError } from 'apollo-link-error';
import withApollo from 'next-with-apollo';

import { notify } from '@utils';

const GRAPHQL_URL = 'http://localhost:4000/graphql';

const httpLink = createHttpLink({
    uri: GRAPHQL_URL
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(graphqlError => {
            console.log(graphqlError);
            console.log(graphqlError.name);
            if (graphqlError.path[0] === 'signup') {
                notify({
                    type: 'danger',
                    title: 'Signup Failed.',
                    message: graphqlError.message
                });
            }
        });
    }

    if (networkError) {
        console.log(networkError);
        notify({
            type: 'danger',
            title: 'Network Problem',
            message: 'Please check your network connection!'
        });
    }
});

const link = ApolloLink.from([errorLink, httpLink]);

export const NextWithApollo = withApollo(
    ({ initialState }) =>
        new ApolloClient({
            link,
            cache: new InMemoryCache().restore(initialState || {})
        })
);
