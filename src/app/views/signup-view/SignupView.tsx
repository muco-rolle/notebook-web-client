import styled from 'styled-components';
import { SignupForm } from './components';
import { DocumentHead } from '@app/components';

const StyledSignupView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export function SignupView() {
    return (
        <StyledSignupView>
            <DocumentHead title="Signup" />
            <SignupForm />
        </StyledSignupView>
    );
}
