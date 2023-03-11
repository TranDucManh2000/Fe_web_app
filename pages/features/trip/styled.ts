import styled from "styled-components";
import theme from "../../../theme";

const TripWrapper = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  .trip_container {
    max-width: 1200px;
    .img_container {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default TripWrapper;
