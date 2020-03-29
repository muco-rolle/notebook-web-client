import styled from 'styled-components';
import { ActivateAccountForm } from './components';
import { DocumentHead } from '@app/components';

const StyledActivateAccount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export function ActivateAccountView() {
    return (
        <StyledActivateAccount>
            <DocumentHead title="Activate Account" />
            <ActivateAccountForm />
        </StyledActivateAccount>
    );
}
