import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo-hooks";
import { ApolloClient } from "apollo-client";
import Router from "next/router";
import NProgress from "nprogress";

import { DocumentHead } from "components";

// setting up nprogress
Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

interface MyAppProps extends AppProps {
    client: ApolloClient<{}>;
}
const MyApp = (props: MyAppProps) => {
    const theme = {};
    const { Component, pageProps, client } = props;

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <DocumentHead />
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
