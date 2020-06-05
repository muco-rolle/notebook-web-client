import { AuthLayout } from "layouts";
import { SignupValues } from "types";
import { SignupForm } from "./SignupForm";
import { useSignupMutation } from "resolvers";
import { notify, redirectTo } from "utils";
import { routes } from "config";

export const SignupView = () => {
    const [signup, { loading }] = useSignupMutation();

    const handleSubmit = async (values: SignupValues) => {
        try {
            const response = await signup({ variables: { ...values } });
            if (response.data) {
                const { username, email } = response.data.signup;
                notify({
                    type: "success",
                    message: "Signup Success",
                    duration: 10000,
                    description: `Hello ${username}, you are successfully registered please check your email inbox we sent you a verification code on ${email}`,
                });

                redirectTo(routes.verifyAccount);
            }
        } catch (error) {
            notify({
                type: "error",
                message: "Signup Failed",
                description: error.message,
            });
        }
    };

    return (
        <AuthLayout documentTitle="Signup">
            <SignupForm handleSubmit={handleSubmit} loading={loading} />
        </AuthLayout>
    );
};
