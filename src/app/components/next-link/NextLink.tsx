import Link from 'next/link';

interface INextLink {
    url: string;
    children: React.ReactNode;
}

export const NextLink = (props: INextLink) => (
    <Link href={props.url}>
        <a>{props.children}</a>
    </Link>
);
