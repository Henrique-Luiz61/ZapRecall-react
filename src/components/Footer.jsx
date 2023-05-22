import styled from "styled-components";

export default function Footer({ count, setCount }) {
  return (
    <SCFooter data-test="footer">
      <p>{count}/8 CONCLUÍDOS</p>
    </SCFooter>
  );
}

const SCFooter = styled.div`
  width: 375px;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;
