import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";

export default function Question(props) {
  const pergunta = props.pergunta;
  console.log(pergunta);

  return (
    <SCQuestion>
      <h1>{pergunta}</h1>
      <img src={setaPlay} alt="play" />
    </SCQuestion>
  );
}

const SCQuestion = styled.div`
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 15px;
  }

  img {
    width: 20px;
    height: 23px;
    margin-right: 15px;
  }
`;
