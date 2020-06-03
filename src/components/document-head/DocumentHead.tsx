import NextHead from "next/head";

interface DocumentHeadProps {
    title?: string;
}

export const DocumentHead = (props: DocumentHeadProps) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            <link
                href="https://fonts.googleapis.com/css?family=Grand+Hotel&display=swap&subset=latin-ext"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap"
                rel="stylesheet"
            />

            <link rel="stylesheet" href="/assets/nprogress.css" />
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link
                href="https://fonts.googleapis.com/css?family=Grand+Hotel&display=swap&subset=latin-ext"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="/assets/nprogress.css" />
            <title>Notebook | {props.title || "Home"}</title>
        </NextHead>
    );
};
