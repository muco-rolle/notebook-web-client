import NextHead from 'next/head';

interface IDocumentHead {
    title?: string;
}

export const DocumentHead = (props: IDocumentHead) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
            href="https://fonts.googleapis.com/css?family=Grand+Hotel&display=swap&subset=latin-ext"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/nprogress.css" />
        <title>Notebook | {props.title || ' Home'}</title>
    </NextHead>
);
