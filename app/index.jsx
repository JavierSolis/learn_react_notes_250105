import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export default function Componente() {
  const dataRutas = [
    { key: 1, name: "(1-conversor)", href: "/(1-conversor)" },
    { key: 2, name: "(2-listas)", href: "/(2-listas)" },
  ];

  const renderItem = ({ item }) => {
    return (
      <LinkButton href={item.href}>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        <Title>Título: {item.name}</Title>
      </LinkButton>
    );
  };

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

const LinkButton = styled(Link)`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 20px;
  flex-direction: row;
  border: 2px solid #cecece;
  width: 100%;
`;
