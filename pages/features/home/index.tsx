import { FC } from "react";
import Navbar from "../../common/navbar";
import Trip from "../trip";
import useHome, { ReceivedProps } from "./hook";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <HomeWrapper>
      <Navbar />
      <Trip />
    </HomeWrapper>
  );
};

const HomeNft: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeNft;
