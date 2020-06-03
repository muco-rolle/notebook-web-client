import styled from "styled-components";

export const StyledAuthLayout = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ),
        url("./assets/auth-bg.png");
    background-size: cover;
    background-position: center;

    .cardContainer {
        display: flex;
        align-items: center;
    }

    .authCard {
        padding: 2rem;
        width: 450px;
        margin: 0 auto;
        background: #f7fafc;
        box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
        border: 1px solid #e9ecef !important;
        border-radius: 3px;
    }
`;
