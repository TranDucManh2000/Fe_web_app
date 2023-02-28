import { FC } from "react";
import useLogin, { ReceivedProps } from "./hook";
import LoginWrapper from "./styled";

const LoginLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <LoginWrapper>
      <h1>Home</h1>
    </LoginWrapper>
  );
};

const Login: FC<ReceivedProps> = (props) => (
  <LoginLayout {...useLogin(props)} />
);

export default Login;
