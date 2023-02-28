import { FC } from "react";
import ButtonCf from "../../../components/button";
import useLogin, { ReceivedProps } from "./hook";
import LoginWrapper from "./styled";

const LoginLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <LoginWrapper>
      <div className="login">
        <div>
          <ButtonCf variant="default">Log in</ButtonCf>
          <p>
            Not a member? <span>Register now</span>
          </p>
        </div>
      </div>
    </LoginWrapper>
  );
};

const Login: FC<ReceivedProps> = (props) => (
  <LoginLayout {...useLogin(props)} />
);

export default Login;
