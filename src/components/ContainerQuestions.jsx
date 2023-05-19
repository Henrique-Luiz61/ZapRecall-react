import Question from "./Question";
import styled from "styled-components";

export default function Questions() {
  const perguntas = [
    { id: 1, pergunta: "Pergunta 1" },
    { id: 1, pergunta: "Pergunta 2" },
    { id: 1, pergunta: "Pergunta 3" },
    { id: 1, pergunta: "Pergunta 4" },
    { id: 1, pergunta: "Pergunta 5" },
    { id: 1, pergunta: "Pergunta 6" },
    { id: 1, pergunta: "Pergunta 7" },
    { id: 1, pergunta: "Pergunta 8" },
  ];

  return (
    <SCContainerQuestions>
      {perguntas.map((p) => (
        <Question key={p.id} pergunta={p.pergunta} />
      ))}
    </SCContainerQuestions>
  );
}

const SCContainerQuestions = styled.div`
  overflow-y: scroll;
  margin-top: 100px;
  margin-bottom: 100px;
`;
