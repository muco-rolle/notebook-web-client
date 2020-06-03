import { Form } from "antd";
import { formValues, signupRules, routes } from "config";
import { Input, Button } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { NextLink } from "components";

interface SignupFormProps {
    handleSubmit: any;
    loading: boolean;
}
export const SignupForm = (props: SignupFormProps) => {
    return (
        <Form
            name="signup"
            initialValues={formValues.signup}
            onFinish={props.handleSubmit}
        >
            {/* <SignupFormItems /> */}
            <Form.Item name="username" rules={signupRules.username}>
                <Input
                    prefix={<UserOutlined />}
                    size="large"
                    placeholder="Username"
                />
            </Form.Item>

            <Form.Item name="email" rules={signupRules.email}>
                <Input
                    prefix={<MailOutlined />}
                    type="email"
                    size="large"
                    placeholder="Email"
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
                    Signup
                </Button>
            </Form.Item>
            <Form.Item>
                Registered? <NextLink href={routes.login}>Login</NextLink>{" "}
            </Form.Item>
        </Form>
    );
};
