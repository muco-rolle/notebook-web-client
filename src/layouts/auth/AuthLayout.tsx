import { ReactNode } from "react";
import { DocumentHead } from "components";

import { StyledAuthLayout } from "./AuthLayout.styles";

interface AuthLayoutProps {
    documentTitle: string;
    children: ReactNode;
}

export const AuthLayout = (props: AuthLayoutProps) => {
    const { documentTitle, children } = props;
    return (
        <StyledAuthLayout>
            <DocumentHead title={documentTitle} />
            <div className="cardContainer">
                <div className="authCard">{children}</div>
            </div>
        </StyledAuthLayout>
    );
};
