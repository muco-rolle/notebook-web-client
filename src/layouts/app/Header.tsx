import { Layout, Button } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
    display: flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const AppHeader = () => {
    return (
        <StyledHeader>
            <div>Search...</div>
            <div>
                <Button size="large" type="primary">
                    Create book
                </Button>
            </div>
        </StyledHeader>
    );
};
