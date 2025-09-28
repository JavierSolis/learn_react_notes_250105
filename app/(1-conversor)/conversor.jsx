import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

export default function Conversor() {
  const [cmInput, setCmInput] = useState("");
  const [metros, setMetros] = useState("");
  const convertirCmAM = () => {
    if (!cmInput) {
      Alert.alert("Error", "Por favor ingresa un valor en cm");
    }
    let m = parseFloat(cmInput) / 100;
    setMetros(m);
  };

  return (
    <Contenedor>
      <Input
        placeholder="Centimetros"
        keyboardType="numeric"
        inputMode="numeric"
        returnKeyType="done"
        onChangeText={setCmInput}
      />
      <CalculateButton onPress={convertirCmAM}>
        <ButtonText>Calcular</ButtonText>
      </CalculateButton>
      <ResultText>
        Resultado: {isNaN(metros) ? "" : metros + " metros"}
      </ResultText>
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
