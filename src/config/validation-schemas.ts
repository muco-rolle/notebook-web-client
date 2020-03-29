import { Schema } from 'rsuite';

const { StringType } = Schema.Types;

export const validationSchemas = {
    login: Schema.Model({
        email: StringType()
            .isEmail('invalid email.')
            .isRequired('email is required'),
        password: StringType().isRequired('password is required')
    }),

    signup: Schema.Model({
        username: StringType().isRequired('username is required.'),
        email: StringType()
            .isEmail('invalid email.')
            .isRequired('email is required'),
        password: StringType().isRequired('password is required')
    }),

    activateAccount: Schema.Model({
        code: StringType().isRequired('verification code is required.')
    })
};
