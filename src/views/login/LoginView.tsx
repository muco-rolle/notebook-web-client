import { AuthLayout } from "layouts";
import { LoginValues } from "types";
import { LoginForm } from "./LoginForm";

export const LoginView = () => {
    const handleSubmit = (values: LoginValues) => {
        console.log(values);
    };

    return (
        <AuthLayout documentTitle="Login">
            <LoginForm handleSubmit={handleSubmit} loading={false} />
        </AuthLayout>
    );
};
