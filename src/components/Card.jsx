import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import { useState } from "react";

export default function Card({ pergunta, setCount, count, answer, question }) {
  const closedquestion = pergunta;
  const [alturacard, setaltura] = useState(65);
  const [corcard, setcor] = useState("#ffffff");
  const [displayinicial, setdinicial] = useState("flex");
  const [displayquestion, setdquestion] = useState("none");
  const [displayanswer, setdanswer] = useState("none");

  function openQuestion() {
    const novaAltura = 130;
    setaltura(novaAltura);
    const novaCor = "#FFFFD4";
    setcor(novaCor);
    const novoDisplayInicial = "none";
    setdinicial(novoDisplayInicial);
    const novoDisplayQuestion = "flex";
    setdquestion(novoDisplayQuestion);
  }

  function showAnswer() {
    const novoDisplayQuestion = "none";
    setdquestion(novoDisplayQuestion);
    const novoDisplayAnswer = "flex";
    setdanswer(novoDisplayAnswer);
  }

  return (
    <SCCard alturacard={alturacard} corcard={corcard}>
      <SCCardInicial displayinicial={displayinicial}>
        <h1>{closedquestion}</h1>
        <SCImagemPlay onClick={openQuestion} src={setaPlay} alt="play" />
      </SCCardInicial>

      <SCCardQuestion displayquestion={displayquestion}>
        <h1>{question}</h1>
        <img onClick={showAnswer} src={setaVirar} alt="virar card" />
      </SCCardQuestion>

      <SCCardAnswer displayanswer={displayanswer}>
        <SCAnswer>
          <h1>{answer}</h1>
        </SCAnswer>

        <SCdivBotoes>
          <SCBotaoNaoLembrei>Não lembrei</SCBotaoNaoLembrei>
          <SCBotaoQuase>Quase não lembrei</SCBotaoQuase>
          <SCBotaoZap>Zap</SCBotaoZap>
        </SCdivBotoes>
      </SCCardAnswer>
    </SCCard>
  );
}

const SCCard = styled.div`
  width: 300px;
  height: ${(props) => props.alturacard}px;
  background-color: ${(props) => props.corcard};
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const SCCardInicial = styled.div`
  width: 90%;
  display: ${(props) => props.displayinicial};
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const SCImagemPlay = styled.img`
  width: 20px;
  height: 23px;
  cursor: pointer;
`;

const SCCardQuestion = styled.div`
  width: 90%;
  display: ${(props) => props.displayquestion};
  justify-content: space-between;

  h1 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 80px;
  }

  img {
    width: 30px;
    height: 20px;
    margin-top: 90px;
    cursor: pointer;
  }
`;

const SCCardAnswer = styled.div`
  width: 85%;
  height: 90%;
  display: ${(props) => props.displayanswer};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const SCAnswer = styled.div`
  width: 85%;
  h1 {
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-left: 5px;
  }
`;

const SCdivBotoes = styled.div`
  display: flex;
`;

const SCBotaoNaoLembrei = styled.button`
  background-color: #ff3030;
  color: #ffffff;
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
`;

const SCBotaoQuase = styled.button`
  background-color: #ff922e;
  color: #ffffff;
  width: 76px;
  height: 37px;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
`;

const SCBotaoZap = styled.button`
  background-color: #2fbe34;
  color: #ffffff;
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
`;
