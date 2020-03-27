import React from 'react';
import { Form, FormControl, FormGroup } from 'rsuite';
import styled from 'styled-components';

// export const FormGroup = props => (
//     <FormGroup {...props}>{props.children}</FormGroup>
// );

// export const FormControl = props => (
//     <FormControl {...props}>{props.children}</FormControl>
// );

const StyledFormField = styled(FormGroup)`
    margin-bottom: 20px;

    .rs-form-control-wrapper {
        width: 100%;
    }
    .rs-input {
        background-color: white;
        width: 100%;
        border-radius: 3px;
        font-family: inherit;
        color: inherit;
        font-size: inherit;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            box-shadow: 0 0 0 30px white inset !important;
        }
        &:focus {
            background-color: white;
        }
    }
`;

interface IFormField {
    name: string;
    accepter: React.ReactNode;
}

export const FormField = (props: any) => {
    const { name, accepter } = props;

    return (
        <StyledFormField>
            <FormControl
                name={name}
                accepter={accepter}
                placeholder={props.label}
                {...props}
            />
        </StyledFormField>
    );
};
