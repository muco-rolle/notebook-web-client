import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from 'next/router';
import NProgress from 'nprogress';

import { NextWithApollo } from '@config';
import { theme } from '@app/theme';

// rsuite styles
import 'rsuite/lib/styles/index.less';

// fonts
import 'typeface-noto-sans';
import 'typeface-noto-serif';
import 'typeface-poppins';

import { GlobalStyles, DocumentHead } from '@app/components';
import { ApolloClient } from 'apollo-boost';

// setting up nprogress
Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

interface IAppProps extends AppProps {
    apollo: ApolloClient<{}>;
}

function App(props: IAppProps) {
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
}

export default NextWithApollo(App);
