import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'rsuite';
import { validationSchemas } from '@config';
import { FormField, Logo, AuthLayout } from '@app/components';

export const LoginForm = () => {
    // TODO: add form types
    let form: any = null;

    const [formValue, setFormValue] = React.useState({
        username: '',
        password: ''
    });

    const [formError, setFormError] = React.useState({});

    const handleSubmit = async () => {
        /*
		second exclamation mark to prevent 
		Object is possibly 'null' warning
	*/
        if (!form!.check()) {
            console.log(formError);
            return;
        }
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
                model={validationSchemas.login}
                autoComplete="off"
            >
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
                    size="lg"
                >
                    Login
                </Button>
            </Form>
        </AuthLayout>
    );
};
