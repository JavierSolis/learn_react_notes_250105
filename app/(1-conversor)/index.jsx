import styled from "styled-components/native";

export default function Componente() {
  return (
    <Contenedor>
      <Icon
        source={{ uri: "https://i.ibb.co/xTXWP76/modista.png" }}
        resizeMode="contain"
      />
      <Title>Conversor</Title>
      <Subtitle>(cm) a (m)</Subtitle>
      <StartButton>
        <ButtonText>Iniciar</ButtonText>
      </StartButton>
    </Contenedor>
  );
}

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
`;
const Subtitle = styled.Text`
  font-size: 10px;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #54c558ff;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Icon = styled.Image`
  width: 204px;
  height: 204px;
`;
