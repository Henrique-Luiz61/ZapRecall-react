import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import iconeCerto from "../assets/icone_certo.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";
import { useState } from "react";

export default function Card({ pergunta, setCount, count, answer, question }) {
  const closedquestion = pergunta;
  const [alturacard, setaltura] = useState(65);
  const [corcard, setcor] = useState("#ffffff");
  const [displayinicial, setdinicial] = useState("flex");
  const [displayquestion, setdquestion] = useState("none");
  const [displayanswer, setdanswer] = useState("none");
  const [status, setstatus] = useState(setaPlay);
  const [corPergunta, setcorpergunta] = useState("#333333");
  const [riscado, setriscado] = useState("none");
  const [carddisabled, setcarddisabled] = useState(false);

  function openQuestion() {
    setaltura(130);
    setcor("#FFFFD4");
    setdinicial("none");
    setdquestion("flex");
  }

  function showAnswer() {
    setdquestion("none");
    setdanswer("flex");
  }

  function finishQuestion(textoBotao) {
    setaltura(65);
    setcor("#ffffff");
    setdanswer("none");
    setdinicial("flex");
    setcarddisabled(true);

    if (textoBotao === "Nao lembrei") {
      setcorpergunta("#FF3030");
      setstatus(iconeErro);
    } else if (textoBotao === "Quase nao lembrei") {
      setcorpergunta("#FF922E");
      setstatus(iconeQuase);
    } else {
      setcorpergunta("#2FBE34");
      setstatus(iconeCerto);
    }
    setriscado("line-through");
    const novoCount = count + 1;
    setCount(novoCount);
  }

  return (
    <SCCard data-test="flashcard" alturacard={alturacard} corcard={corcard}>
      <SCCardInicial
        displayinicial={displayinicial}
        corPergunta={corPergunta}
        riscado={riscado}
      >
        <h1 data-test="flashcard-text">{closedquestion}</h1>
        <button disabled={carddisabled}>
          <img
            data-test="play-btn"
            onClick={openQuestion}
            src={status}
            alt="play"
          />
        </button>
      </SCCardInicial>

      <SCCardQuestion displayquestion={displayquestion}>
        <h1 data-test="flashcard-text">{question}</h1>
        <img
          data-test="turn-btn"
          onClick={showAnswer}
          src={setaVirar}
          alt="virar card"
        />
      </SCCardQuestion>

      <SCCardAnswer displayanswer={displayanswer}>
        <SCAnswer>
          <h1 data-test="flashcard-text">{answer}</h1>
        </SCAnswer>

        <SCdivBotoes>
          <SCBotaoNaoLembrei
            data-test="no-btn"
            onClick={() => finishQuestion("Nao lembrei")}
          >
            Não lembrei
          </SCBotaoNaoLembrei>
          <SCBotaoQuase
            data-test="partial-btn"
            onClick={() => finishQuestion("Quase nao lembrei")}
          >
            Quase não lembrei
          </SCBotaoQuase>
          <SCBotaoZap data-test="zap-btn" onClick={() => finishQuestion("Zap")}>
            Zap
          </SCBotaoZap>
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
  text-decoration-line: ${(props) => props.riscado};

  h1 {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.corPergunta};
  }

  img {
    width: 20px;
    height: 23px;
    cursor: pointer;
  }

  button {
    background-color: #ffffff;
    border: none;
    cursor: pointer;
  }
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
  cursor: pointer;
`;

const SCBotaoQuase = styled.button`
  background-color: #ff922e;
  color: #ffffff;
  width: 76px;
  height: 37px;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

const SCBotaoZap = styled.button`
  background-color: #2fbe34;
  color: #ffffff;
  width: 85px;
  height: 37px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
