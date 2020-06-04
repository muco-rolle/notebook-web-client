import { Form } from "antd";
import { formValues, signupRules, routes, loginRules } from "config";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NextLink } from "components";

interface LoginFormProps {
    handleSubmit: any;
    loading: boolean;
}
export const LoginForm = (props: LoginFormProps) => {
    return (
        <Form
            name="login"
            initialValues={formValues.signup}
            onFinish={props.handleSubmit}
        >
            <Form.Item
                name="emailOrUsername"
                rules={loginRules.emailOrPassword}
            >
                <Input
                    prefix={<UserOutlined />}
                    type="text"
                    size="large"
                    placeholder="Email or Username"
                />
            </Form.Item>

            <Form.Item name="password" rules={signupRules.password} hasFeedback>
                <Input.Password
                    prefix={<LockOutlined />}
                    size="large"
                    placeholder="Password"
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
                    Login
                </Button>
            </Form.Item>
            <Form.Item>
                Already have an account?{" "}
                <NextLink href={routes.home}>Signup</NextLink>{" "}
            </Form.Item>
        </Form>
    );
};
