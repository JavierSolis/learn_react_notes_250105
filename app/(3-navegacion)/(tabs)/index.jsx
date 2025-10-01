import styled from "styled-components/native";

export default function Index() {
  return (
    <Contenedor>
      <Texto>Index Tab</Texto>
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
