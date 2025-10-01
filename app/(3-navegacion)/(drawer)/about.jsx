import styled from "styled-components/native";

export default function About() {
  return (
    <Contenedor>
      <Texto>About Drawer</Texto>
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
