import styled from 'styled-components';
import { Logo } from '@app/components';

interface IAuthLayout {
    children: React.ReactNode;
}

const StyledAuthLayout = styled.section`
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 31px;

    .logo,
    .form-title {
        text-align: center;
    }
    .logo {
        text-align: center;
        padding-top: 30px;
        a {
            font-weight: 900 !important;
        }
    }

    .logo-auth {
        padding: 20px;
        font-weight: 700;
    }

    form {
        padding: 0 30px 30px 30px;
    }
`;

export const AuthLayout = (props: IAuthLayout) => (
    <StyledAuthLayout>
        <Logo className="logo-auth">notebook</Logo>
        {props.children}
    </StyledAuthLayout>
);
