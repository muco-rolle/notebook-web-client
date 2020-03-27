import styled from 'styled-components';
import { Logo } from '@app/components';
import { Nav } from './Nav';
import { greyColor } from '@utils';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 150px;

    .logo {
        color: ${greyColor(5)};
    }
`;

export function Header() {
    return (
        <StyledHeader>
            <Logo className="logo">notebook</Logo>
            <Nav />
        </StyledHeader>
    );
}
