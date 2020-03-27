import styled from 'styled-components';

interface IAuthLayout {
    children: React.ReactNode;
}

const StyledAuthLayout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ),
        url('/images/hero.jpg');
    background-size: cover;
    background-position: center center;

    .authCard {
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
            ),
            url('/images/hero.jpg');
        background-size: cover;
        background-position: center center;
    }
`;

export const AuthLayout = (props: IAuthLayout) => (
    <StyledAuthLayout>
        <div className="authCard">{props.children}</div>
    </StyledAuthLayout>
);
