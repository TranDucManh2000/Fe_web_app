import { BellOutlined, ShoppingFilled } from "@ant-design/icons";
import { Image } from "antd";
import { FC } from "react";
import AvatarNft from "../../../components/avatar";
import ButtonCf from "../../../components/button";
import PopoverNft from "../../../components/popover";
import SearchNft from "../../../components/search";
import useHome, { ReceivedProps } from "./hook";
import NavbarWrapper from "./styled";

const NavbarLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <NavbarWrapper>
      <div>
        {/* <Image
          preview={false}
          src="https://loobr.com/assets/images/loobr.svg"
          width={150}
          height={75}
        /> */}
        <h1>Backpacking</h1>
        <div>
          <span className="text">manh</span>
        </div>
      </div>
      <div>
        <SearchNft />
        <PopoverNft active={true}>
          <div className="bell">
            <BellOutlined className="icon" />
          </div>
        </PopoverNft>
        <div className="bell">
          <ShoppingFilled
            // onClick={() => nexPage("/features/cart")}
            className="icon"
          />
        </div>
        <ButtonCf variant="default">Create NFT</ButtonCf>
        <PopoverNft active={true}>
          <div>
            <AvatarNft
              dataImg={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEmgoJ7d7XLyOghKabgkvM9zrEAzga4jrq1bMvj88&s"
              }
            />
          </div>
        </PopoverNft>
      </div>
    </NavbarWrapper>
  );
};

const Navbar: FC<ReceivedProps> = (props) => (
  <NavbarLayout {...useHome(props)} />
);

export default Navbar;
