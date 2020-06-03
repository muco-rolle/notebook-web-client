import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

import { DocumentHead } from "components";

// setting up nprogress
Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = (props: AppProps) => {
    const theme = {};
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <DocumentHead />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
