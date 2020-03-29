import React from 'react';
import { FormGroup, FormControl } from 'rsuite';

interface IFormFieldProps {
    name: string;
    component?: React.ElementType;
    label?: string;
    type?: string;
    placeholder: string;
    i18n?: boolean;
}

export const FormField = (props: IFormFieldProps) => {
    const { name, type, placeholder, component } = props;
    return (
        <FormGroup>
            <FormControl
                type={type}
                name={name}
                placeholder={placeholder}
                accepter={component}
                size="lg"
            />
        </FormGroup>
    );
};
