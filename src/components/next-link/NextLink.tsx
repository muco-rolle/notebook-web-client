import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface NextLinkProps extends LinkProps {
    children: ReactNode;
}

export const NextLink = (props: NextLinkProps) => (
    <Link {...props}>
        <a>{props.children}</a>
    </Link>
);
