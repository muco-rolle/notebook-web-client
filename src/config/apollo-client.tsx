import withApollo from "next-with-apollo";
import { ApolloClient } from "apollo-client";

import { ApolloLink, InMemoryCache } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";

import fetch from "isomorphic-unfetch";
import { API_URL } from "config";
import { storage, notify } from "utils";

const httpLink = new HttpLink({
    fetch,
    uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const { token } = storage.get("devworkshop");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (networkError) {
        notify({
            type: "error",
            message: "Network Problem",
            duration: 10000,
            description: "Please check your network connection!",
        });
    }
});

const link = ApolloLink.from([errorLink, authLink, httpLink]);

export const NextWithApollo = withApollo(
    // You can get headers and ctx (context) from the callback params
    // e.g. ({ headers, ctx, initialState })
    ({ initialState }) =>
        new ApolloClient({
            link,
            //  rehydrate the cache using the initial data passed from the server:
            cache: new InMemoryCache().restore(initialState || {}),
        })
);
