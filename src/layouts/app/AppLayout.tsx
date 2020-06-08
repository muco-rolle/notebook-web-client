import { ReactNode } from "react";
import styled from "styled-components";

import { DocumentHead } from "components";
import { Sidebar } from "./Sidebar";
import { AppHeader } from "./Header";
import { MainContent } from "./MainContent";

import { Layout, Menu, Button } from "antd";

const { Header, Content, Footer } = Layout;
interface AppLayoutProps {
    documentTitle: string;
    children: ReactNode;
}

const StyledAppLayout = styled(Layout)`
    .content-layout {
        margin-left: 250px;
        background-color: white;
    }

    .main-content {
        margin: 24px 16px 0;
        margin-top: 100px;
        overflow: initial;
    }

    .footer {
        text-align: center;
    }
`;
export const AppLayout = (props: AppLayoutProps) => {
    return (
        <StyledAppLayout>
            <DocumentHead title={props.documentTitle} />

            <Layout>
                <Sidebar />

                <Layout className="content-layout">
                    <AppHeader />
                    <Content className="main-content">{props.children}</Content>
                    <Footer className="footer">
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </StyledAppLayout>
    );
};
