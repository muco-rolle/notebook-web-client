import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";

import Router from "next/router";
import NProgress from "nprogress";

import { DocumentHead, GlobalStyles } from "components";
import { NextWithApollo } from "config";

// setting up nprogress
Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

interface MyAppProps extends AppProps {
    apollo: ApolloClient<{}>;
}
const MyApp = (props: MyAppProps) => {
    const theme = {};
    const { Component, pageProps, apollo } = props;

    return (
        <ApolloProvider client={apollo}>
            <ThemeProvider theme={theme}>
                <DocumentHead />
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default NextWithApollo(MyApp);
