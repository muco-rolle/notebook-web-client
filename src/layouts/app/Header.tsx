import { Layout } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
    background: #f0f2f5;
`;

export const AppHeader = () => {
    return (
        <StyledHeader>
            <h1>Header</h1>
        </StyledHeader>
    );
};
