import styled from "styled-components/native";

export default function Componente() {
  return (
    <Contenedor>
      <Texto>Componente</Texto>
    </Contenedor>
  );
}

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text`
  font-size: 20px;
`;
