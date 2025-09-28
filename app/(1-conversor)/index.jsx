import { router } from "expo-router";

import styled from "styled-components/native";

export default function Index() {
  return (
    <Contenedor>
      <Icon
        source={{ uri: "https://i.ibb.co/xTXWP76/modista.png" }}
        resizeMode="contain"
      />
      <Title>Conversor</Title>
      <Subtitle>(cm) a (m)</Subtitle>
      <StartButton onPress={() => router.push("/conversor")}>
        <ButtonText>Iniciar</ButtonText>
      </StartButton>
    </Contenedor>
  );
}

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #767fa3ff;
`;
const Title = styled.Text`
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Subtitle = styled.Text`
  font-size: 10px;
  color: white;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #2f3699ff;
  padding: 10px 20px;
  border-radius: 15px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

const Icon = styled.Image`
  width: 204px;
  height: 204px;
`;
