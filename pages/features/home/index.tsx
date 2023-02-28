import { FC } from "react";
import useHome, { ReceivedProps } from "./hook";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <HomeWrapper>
      <h1>Home</h1>
    </HomeWrapper>
  );
};

const HomeNft: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeNft;
