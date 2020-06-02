import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { DocumentHead } from "components";

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
