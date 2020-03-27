import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';

const GRAPHQL_URL = 'http://localhost:4000/graphql';

export const NextWithApollo = withApollo(
    ({ initialState }) =>
        new ApolloClient({
            uri: GRAPHQL_URL,
            cache: new InMemoryCache().restore(initialState || {})
        })
);
