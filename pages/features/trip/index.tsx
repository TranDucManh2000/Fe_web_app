import { Image, TabsProps } from "antd";
import { FC } from "react";
import AvatarNft from "../../../components/avatar";
import useTrip, { ReceivedProps } from "./hook";
import TripWrapper from "./styled";

const TripLayout: FC<ReceivedProps> = ({ props, onChange }) => {
  return (
    <TripWrapper>
      <div className="trip_container">
        <div className="img_container">
          <AvatarNft
            dataLink="profile"
            title="Tran Manh"
            dataImg={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEmgoJ7d7XLyOghKabgkvM9zrEAzga4jrq1bMvj88&s"
            }
          />
          <h1 style={{ marginTop: 10 }}>Road to Ha Giang</h1>
          <p>
            Quê em là một ngôi làng nhỏ nằm dưới chân núi. Đứng ở lưng núi là có
            thể quan sát toàn bộ ngôi làng. Nhìn khắp làng, đâu cũng là màu xanh
            tươi tràn ngập sức sống. Đó là màu xanh của ruộng lúa đương thì ngon
            gái thơm nồng hương sữa lúa non. Là màu xanh của những khu vườn tươi
            tốt được chăm sóc chu đáo. Là màu xanh của những ao bèo, hồ sen.
            Thật là thích mắt! Nhờ thảm xanh ấy và cả ngọn núi lớn mà cả làng
            lúc nào cũng mát mẻ. Cuộc sống nơi đây thì bình yên, chậm rãi. Em
            luôn cảm thấy quê mình như là một chốn thế ngoại đào viên cho mọi
            người dừng chân nghỉ ngơi khi đã mệt nhọc với chốn xô bồ ngoài kia.
          </p>
        </div>
        <Image
          width={"100%"}
          src="https://i.pinimg.com/originals/11/91/9d/11919d94e08ad9efb0d1e509bcff3a88.jpg"
        />
      </div>
    </TripWrapper>
  );
};

const Trip: FC<ReceivedProps> = (props) => <TripLayout {...useTrip(props)} />;

export default Trip;
