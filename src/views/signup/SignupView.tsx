import { AuthLayout } from "layouts";
import { SignupValues } from "types";
import { SignupForm } from "./SignupForm";
import { useSignupMutation } from "resolvers";

export const SignupView = () => {
    const [signup, { loading }] = useSignupMutation();

    const handleSubmit = async (values: SignupValues) => {
        try {
            const response = await signup({ variables: { ...values } });
            if (response.data) {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthLayout documentTitle="Signup">
            <SignupForm handleSubmit={handleSubmit} loading={loading} />
        </AuthLayout>
    );
};
