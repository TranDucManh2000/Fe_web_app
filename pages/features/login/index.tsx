import { Button, Checkbox, Form, Input, Tabs, TabsProps } from "antd";
import { FC } from "react";
import ButtonCf from "../../../components/button";
import useLogin, { ReceivedProps } from "./hook";
import LoginWrapper from "./styled";

const LoginLayout: FC<ReceivedProps> = ({
  onChange,
  onFinish,
  onFinishFailed,
}) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Login`,
      children: (
        <div>
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <p>Username</p>
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <p>Password</p>
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      key: "2",
      label: `Register`,
      children: (
        <div>
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <p>Username</p>
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <p>Password</p>
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="thePassword"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <p>Enter the password</p>
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];
  return (
    <LoginWrapper>
      <div className="form_login">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </LoginWrapper>
  );
};

const Login: FC<ReceivedProps> = (props) => (
  <LoginLayout {...useLogin(props)} />
);

export default Login;
