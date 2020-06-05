import styled from "styled-components";
import { Layout } from "antd";
import { ReactNode } from "react";

interface MainContentProps {
    children: ReactNode;
}
const StyledMainContent = styled(Layout.Content)``;

export const MainContent = (props: MainContentProps) => {
    return (
        <StyledMainContent style={{ margin: "24px 16px 0" }}>
            {props.children}
        </StyledMainContent>
    );
};
