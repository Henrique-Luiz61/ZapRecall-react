import Header from "./Header";
import ContainerQuestions from "./ContainerQuestions";
import Footer from "./Footer";
import styled from "styled-components";

export default function ZapRecallMain() {
  return (
    <SCZapRecallMain>
      <Header />
      <ContainerQuestions />
      <Footer />
    </SCZapRecallMain>
  );
}

const SCZapRecallMain = styled.div`
  background-color: #fb6b6b;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
