import { Tabs, TabsProps } from "antd";
import { FC } from "react";
import AvatarNft from "../../../components/avatar";
import ButtonCf from "../../../components/button";
import useProfile, { ReceivedProps } from "./hook";
import ProfileWrapper from "./styled";

const ProfileLayout: FC<ReceivedProps> = ({ props, onChange }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Trips `,
      children: (
        <div>
          <div className="trip_item">
            <div className="icon">...</div>
            <div>
              <h2>Road to Dalat</h2>
              <h4>22/2/2022</h4>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: `Statistics`,
      children: <div></div>,
    },
  ];
  return (
    <ProfileWrapper>
      <div className="trip_profile_container">
        <AvatarNft
          title="Tran Manh"
          dataImg={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEmgoJ7d7XLyOghKabgkvM9zrEAzga4jrq1bMvj88&s"
          }
        />
        <div className="item_container">
          <span>5</span> <span>Trips</span>
        </div>
        <div className="item_container">
          <span>5</span>
          <span>5 Followers</span>
        </div>
        <div className="item_container">
          <span>5</span>
          <span>5 Following</span>
        </div>
        <div className="item_title">
          <span>Thích thì đi thôi</span>
        </div>
        <div className="item_title">
          <ButtonCf>Follow</ButtonCf>
          <ButtonCf>...</ButtonCf>
        </div>
        <div className="item_title">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </ProfileWrapper>
  );
};

const Profile: FC<ReceivedProps> = (props) => (
  <ProfileLayout {...useProfile(props)} />
);

export default Profile;
