import "./login-page.css";
import { useState } from "@hookstate/core";
import { DevTools } from "@hookstate/core";
import { Input, Row, Col, Button, Form, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const LoginPage = () => {
  const state = useState({
    isBusy: false,
  });
  DevTools(state).label("login-page-state");

  const onFinish = (values: any) => {
    state.isBusy.set(true);
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Form
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={state.isBusy.get()}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
