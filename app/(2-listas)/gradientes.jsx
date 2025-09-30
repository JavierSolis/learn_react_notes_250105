import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export function GradientesScreen() {
  return (
    <Contenedor>
      <LinearGradient
        style={{ width: "100%", alignItems: "center", flex: 1 }}
        // Background Linear Gradient
        colors={["#4c669f", "#e76b12ff", "#196a2bff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Title>Gradientes</Title>
      </LinearGradient>
    </Contenedor>
  );
}

const Contenedor = styled(SafeAreaView)`
  flex: 1;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 20px;
`;
const Text = styled.Text`
  font-size: 15px;
`;
const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  width: 300px;
`;
