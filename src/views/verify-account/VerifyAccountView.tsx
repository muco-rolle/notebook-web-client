import { AuthLayout } from "layouts";
import { VerifyAccountValues } from "types";
import { VerifyAccountForm } from "./VerifyAccountForm";

export const VerifyAccountView = () => {
    const handleSubmit = (values: VerifyAccountValues) => {
        console.log(values);
    };

    return (
        <AuthLayout documentTitle="Verify Account">
            <VerifyAccountForm handleSubmit={handleSubmit} loading={false} />
        </AuthLayout>
    );
};
