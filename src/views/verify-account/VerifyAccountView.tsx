import { AuthLayout } from "layouts";
import { VerifyAccountValues } from "types";
import { VerifyAccountForm } from "./VerifyAccountForm";
import { useActivateAccountMutation } from "resolvers";
import { notify, redirectTo, storage } from "utils";
import { routes } from "config";

export const VerifyAccountView = () => {
    const [activateAccount, { loading }] = useActivateAccountMutation();
    const handleSubmit = async (values: VerifyAccountValues) => {
        try {
            const response = await activateAccount({
                variables: { ...values },
            });

            const { username, token, active } = response.data.activateAccount;

            // save this data in localStorage
            storage.save({ token, active });

            if (response.data) {
                notify({
                    type: "success",
                    message: "Account Activation Success",
                    description: `${username} your Account was successfully activated.`,
                });

                redirectTo(routes.app);
            }
        } catch ({ message }) {
            notify({
                type: "error",
                message: "Account Activation Failed",
                description: message,
            });
        }
    };

    return (
        <AuthLayout documentTitle="Verify Account">
            <VerifyAccountForm handleSubmit={handleSubmit} loading={loading} />
        </AuthLayout>
    );
};
