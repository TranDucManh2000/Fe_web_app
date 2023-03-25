import styled from "styled-components";

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .trip_profile_container {
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
    justify-content: center;
    .item_container {
      display: flex;
      flex-wrap: wrap;
      span {
        width: 100%;
        text-align: center;
      }
    }
    .item_title {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .trip_item {
      padding: 15px;
      background-color: black;
      color: #fff;
      border-radius: 10px;
      width: 550px;
      height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .icon {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export default ProfileWrapper;
