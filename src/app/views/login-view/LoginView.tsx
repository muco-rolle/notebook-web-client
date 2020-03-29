import styled from 'styled-components';
import { LoginForm } from './components';
import { DocumentHead } from '@app/components';

const StyledLoginView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export function LoginView() {
    return (
        <StyledLoginView>
            <DocumentHead title="Login" />
            <LoginForm />
        </StyledLoginView>
    );
}
