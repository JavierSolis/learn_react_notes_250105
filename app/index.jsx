import { FlatList } from "react-native";
import styled from "styled-components/native";

export default function Componente() {
  const dataRutas = [
    { key: 1, name: "(1-conversor)" },
    { key: 2, name: "(2-listas)" },
  ];

  const renderItem = ({ item }) => <Title>Título: {item.name}</Title>;

  return (
    <Contenedor>
      <Texto>Componente</Texto>
      <FlatList
        data={dataRutas}
        renderItem={renderItem}
        keyExtractor={(data) => data.key}
      />
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
const Title = styled.Text`
  font-size: 20px;
`;
