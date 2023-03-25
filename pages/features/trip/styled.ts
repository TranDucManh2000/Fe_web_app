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
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;

export default TripWrapper;
