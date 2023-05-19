import logo from "../assets/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <SCHeader>
      <img src={logo} alt="Logo ZapRecall" />
      <h1>ZapRecall</h1>
    </SCHeader>
  );
}

const SCHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  img {
    width: 52px;
    height: 60px;
    margin-top: 12px;
  }

  h1 {
    font-size: 36px;
    font-weight: 400;
    color: #ffffff;
    margin-left: 10px;
  }
`;
