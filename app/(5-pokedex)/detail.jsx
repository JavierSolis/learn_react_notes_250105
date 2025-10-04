import { useLocalSearchParams } from "expo-router";
import styled from "styled-components/native";

export default function DetailScreen() {
  const { item } = useLocalSearchParams();
  const pokemon = JSON.parse(item);

  return (
    <Contenedor>
      <Texto>Componente DEtail {pokemon.name}</Texto>
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
