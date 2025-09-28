import { router } from "expo-router";
import styled from "styled-components/native";

export default function Componente() {
  return (
    <Contenedor>
      <Input />
      <CalculateButton>
        <ButtonText>Calcular</ButtonText>
      </CalculateButton>
      <ResultText>Resultado: </ResultText>
      <BackButton onPress={() => router.back()}>
        <ButtonText>Volver</ButtonText>
      </BackButton>
    </Contenedor>
  );
}

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #57518aff;
`;
const Texto = styled.Text`
  font-size: 20px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 80%;
  font-size: 18px;
`;

const ResultText = styled.Text`
  font-size: 24px;
  margin-top: 20px;
  color: white;
`;

const CalculateButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 15px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const BackButton = styled.TouchableOpacity`
  background-color: #6c757d;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;
