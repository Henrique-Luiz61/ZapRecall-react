import Card from "./Card";
import styled from "styled-components";

export default function ContainerCards({ count, setCount }) {
  const perguntas = [
    { id: 1, pergunta: "Pergunta 1" },
    { id: 2, pergunta: "Pergunta 2" },
    { id: 3, pergunta: "Pergunta 3" },
    { id: 4, pergunta: "Pergunta 4" },
    { id: 5, pergunta: "Pergunta 5" },
    { id: 6, pergunta: "Pergunta 6" },
    { id: 7, pergunta: "Pergunta 7" },
    { id: 8, pergunta: "Pergunta 8" },
  ];

  return (
    <SCContainerCards>
      {perguntas.map((p) => (
        <Card
          key={p.id}
          pergunta={p.pergunta}
          setCount={setCount}
          count={count}
        />
      ))}
    </SCContainerCards>
  );
}

const SCContainerCards = styled.div`
  overflow-y: scroll;
  margin-top: 100px;
  margin-bottom: 100px;
`;
