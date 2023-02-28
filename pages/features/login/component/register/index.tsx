import { FC } from "react";
import useRegister, { ReceivedProps } from "./hook";
import RegisterWrapper from "./styled";

const RegisterLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <RegisterWrapper>
      <h1>useRegister</h1>
    </RegisterWrapper>
  );
};

const Register: FC<ReceivedProps> = (props) => (
  <RegisterLayout {...useRegister(props)} />
);

export default Register;
