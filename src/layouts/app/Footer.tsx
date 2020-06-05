import { Layout } from "antd";
import styled from "styled-components";

const AntFooter = Layout.Footer;

const StyledFooter = styled(AntFooter)`
    text-align: center;
`;

export const Footer = () => (
    <StyledFooter>
        Notebook © {new Date().getFullYear()} Created by{" "}
        <a href="https://github.com/muco-rolle" target="_blank">
            Muco Tresor
        </a>
    </StyledFooter>
);
