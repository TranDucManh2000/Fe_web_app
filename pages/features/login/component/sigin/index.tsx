import { FC } from "react";
import useSigin, { ReceivedProps } from "./hook";
import SiginWrapper from "./styled";

const SiginLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <SiginWrapper>
      <h1>useRegister</h1>
    </SiginWrapper>
  );
};

const Sigin: FC<ReceivedProps> = (props) => (
  <SiginLayout {...useSigin(props)} />
);

export default Sigin;
