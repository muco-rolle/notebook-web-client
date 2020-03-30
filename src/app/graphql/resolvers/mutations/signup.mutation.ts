import gql from 'graphql-tag';

export const SIGNUP_USER = gql`
    mutation SIGNUP_USER(
        $username: String!
        $email: String!
        $password: String!
    ) {
        signup(
            user: { username: $username, email: $email, password: $password }
        ) {
            id
            username
            email
        }
    }
`;
