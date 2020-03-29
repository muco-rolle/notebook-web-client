import React from 'react';
import { Form, Input, Button } from 'rsuite';
import { useMutation } from '@apollo/react-hooks';

import { validationSchemas } from '@config';
import { FormField, AuthLayout } from '@app/components';
import { SIGNUP_USER } from '@app/graphql';

interface ISignupUser {
    username: string;
    email: string;
    password: string;
}
export const SignupForm = () => {
    const [signupUser, { data, loading, error }] = useMutation<{
        user: ISignupUser;
    }>(SIGNUP_USER);

    // TODO: add form types
    let form: any = null;

    const [formValue, setFormValue] = React.useState({
        username: '',
        email: '',
        password: ''
    });

    const [formError, setFormError] = React.useState({});

    if (data) {
        console.log(data);
    }

    if (error) {
        console.log(error.message);
    }

    const handleSubmit = async () => {
        /*
		second exclamation mark to prevent 
		Object is possibly 'null' warning
	*/
        if (!form!.check()) {
            console.log(formError);
            return;
        }
        signupUser({ variables: { ...formValue } });
    };

    return (
        <AuthLayout>
            <Form
                ref={(ref: any) => (form = ref)}
                onChange={(value: any) => {
                    setFormValue({ ...value });
                }}
                onCheck={formError => {
                    setFormError({ formError });
                }}
                formValue={formValue}
                model={validationSchemas.signup}
                autoComplete="off"
            >
                <FormField
                    type="text"
                    name="username"
                    placeholder={'enter your username'}
                    component={Input}
                />

                <FormField
                    type="email"
                    name="email"
                    placeholder={'enter your email'}
                    component={Input}
                />

                <FormField
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    component={Input}
                />

                <Button
                    appearance="primary"
                    block
                    onClick={handleSubmit}
                    loading={loading}
                    size="lg"
                >
                    Signup
                </Button>
            </Form>
        </AuthLayout>
    );
};
