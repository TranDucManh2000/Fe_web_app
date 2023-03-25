import styled from "styled-components";
import theme from "../../../theme";

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("https://hanoispiritofplace.com/wp-content/uploads/2016/07/hinh-anh-trai-dat-dep-2.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  .form_login {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    min-width: 450px;
  }
`;

export default LoginWrapper;
