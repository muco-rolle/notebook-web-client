import styled from 'styled-components';
import Link from 'next/link';
import { routes } from '@config';
import { greyColor, primaryColor } from '@utils';
const StyledNav = styled.nav`
    ul {
        display: flex;
    }

    li {
        list-style-type: none;

        a {
            color: ${greyColor(4)};
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;

            &:hover {
                color: ${greyColor(5)};
            }
        }

        .signup-button {
            padding: 8px 15px;
            border-radius: 100px;
            background-color: ${primaryColor(5)};
            color: white;
            transition: color 0.2s;

            &:hover {
                color: white;
                background-color: ${primaryColor(6)};
            }
        }
    }
    li:not(:last-child) {
        margin-right: 30px;
    }
`;

export function Nav() {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link href={routes.login}>
                        <a>Login</a>
                    </Link>
                </li>

                <li>
                    <Link href={routes.signup}>
                        <a className="signup-button">Signup</a>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    );
}
