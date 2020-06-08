import { Layout, Button } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    overflow: auto;
    position: fixed;
    width: 100vw;
    z-index: 1000;
    right: 0;
    height: 70px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
`;

export const AppHeader = () => {
    return (
        <StyledHeader>
            <div>Search...</div>{" "}
            <div>
                <Button type="primary" size="large">
                    Create Book
                </Button>
            </div>
        </StyledHeader>
    );
};
