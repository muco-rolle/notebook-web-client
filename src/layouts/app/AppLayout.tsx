import { Layout } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";

import { DocumentHead } from "components";
import { Sidebar } from "./Sidebar";
import { AppHeader } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

interface AppLayoutProps {
    documentTitle: string;
    children: ReactNode;
}

const StyledAppLayout = styled(Layout)`
    .layoutContent {
    }

    .main-content {
    }

    .footer {
        text-align: center;
    }
`;
export const AppLayout = (props: AppLayoutProps) => {
    return (
        <StyledAppLayout>
            <DocumentHead title={props.documentTitle} />
            <Sidebar />
            <Layout className="content-container">
                <AppHeader />
                <MainContent>{props.children}</MainContent>
                <Footer />
            </Layout>
        </StyledAppLayout>
    );
};
