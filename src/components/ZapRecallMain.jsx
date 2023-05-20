import Header from "./Header";
import ContainerCards from "./ContainerCards";
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";

export default function ZapRecallMain() {
  const [count, setCount] = useState(0);

  return (
    <SCZapRecallMain>
      <Header />
      <ContainerCards count={count} setCount={setCount} />
      <Footer count={count} setCount={setCount} />
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
