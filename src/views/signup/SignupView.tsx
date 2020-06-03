import { AuthLayout } from "layouts";
import { SignupValues } from "types";
import { SignupForm } from "./SignupForm";

export const SignupView = () => {
    const handleSubmit = (values: SignupValues) => {
        console.log(values);
    };

    return (
        <AuthLayout documentTitle="Signup">
            <SignupForm handleSubmit={handleSubmit} loading={false} />
        </AuthLayout>
    );
};
