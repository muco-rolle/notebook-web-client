import { Form, Button, Input } from "antd";
import { AuthLayout } from "layouts";
import { signupRules, routes, formValues } from "config";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { NextLink } from "components";

export const SignupView = () => {
    const handleSubmit = (values: typeof formValues.signup) => {
        console.log(values);
    };

    return (
        <AuthLayout documentTitle="Signup">
            <Form
                name="signup"
                initialValues={formValues.signup}
                onFinish={handleSubmit}
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

                <Form.Item
                    name="password"
                    rules={signupRules.password}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        size="large"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large" block htmlType="submit">
                        Signup
                    </Button>
                </Form.Item>
                <Form.Item>
                    Registered? <NextLink href={routes.login}>Login</NextLink>{" "}
                </Form.Item>
            </Form>
        </AuthLayout>
    );
};
