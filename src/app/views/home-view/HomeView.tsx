import styled from 'styled-components';
import { Header, Intro } from './components';

const StyledHomeView = styled.div`
    height: 100vh;
`;

export function HomeView() {
    return (
        <StyledHomeView>
            <Header />
            <Intro />
        </StyledHomeView>
    );
}
