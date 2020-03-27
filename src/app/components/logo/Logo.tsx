import styled from 'styled-components';

interface ILogo {
    children: React.ReactNode;
}

export const StyledLogo = styled.h1`
    font-family: 'Grand Hotel', cursive;
`;

export const Logo = (props: ILogo) => <StyledLogo>{props.children}</StyledLogo>;
