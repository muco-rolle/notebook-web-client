import NextHead from "next/head";

interface DocumentHeadProps {
    title?: string;
}

export const DocumentHead = (props: DocumentHeadProps) => {
    return (
        <NextHead>
            <title>Notebook | {props.title || "Home"}</title>
        </NextHead>
    );
};
