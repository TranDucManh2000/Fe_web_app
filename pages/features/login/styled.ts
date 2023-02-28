import styled from "styled-components";
import theme from "../../../theme";

const LoginWrapper = styled.div`
  width: 100%;
  .login {
    width: 200vh;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://www.mapitstudio.com/wp-content/uploads/2021/04/medinis-pasaulio-zemelapis-su-valstybemis-azuolas-map-it-studio.jpg");
    div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: absolute;
      bottom: 20px;
      p {
        width: 100%;
        text-align: center;
        span {
          color: blue;
        }
      }
    }
  }
`;

export default LoginWrapper;
