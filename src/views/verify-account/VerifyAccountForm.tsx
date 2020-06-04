import { Form } from "antd";
import { formValues, signupRules, routes, loginRules } from "config";
import { Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";

interface VerifyAccountProps {
    handleSubmit: any;
    loading: boolean;
}
export const VerifyAccountForm = (props: VerifyAccountProps) => {
    return (
        <Form
            name="verify-account"
            initialValues={formValues.signup}
            onFinish={props.handleSubmit}
        >
            <Form.Item name="code" rules={signupRules.password} hasFeedback>
                <Input.Password
                    prefix={<LockOutlined />}
                    size="large"
                    placeholder="Enter your verification code"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                    loading={props.loading}
                >
                    Verify Account
                </Button>
            </Form.Item>
        </Form>
    );
};
