import styled from 'styled-components';
import { NextLink } from '@app/components';
import { routes } from '@config';
import { greyColor } from '@utils';

interface ILogo {
    children: React.ReactNode;
    className?: string;
}

export const StyledLogo = styled.h1`
    font-family: 'Grand Hotel', cursive;
    a {
        color: ${greyColor(5)};
        &:hover {
            color: ${greyColor(7)};
            text-decoration: none;
        }
    }
`;

export const Logo = (props: ILogo) => (
    <StyledLogo>
        <NextLink url={routes.home}>{props.children}</NextLink>
    </StyledLogo>
);
