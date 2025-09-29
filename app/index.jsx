import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Componente() {
  const route = useRouter();
  const dataRutas = [
    { key: 1, name: "(1-conversor)", href: "/(1-conversor)" },
    { key: 2, name: "(2-listas)", href: "/(2-listas)" },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => route.push(item.href)}>
        <LinkButton>
          <ItemContenedor>
            <Name>{item.name}</Name>
            <ArrowIcon name="arrow-forward-ios" color="black" />
          </ItemContenedor>
        </LinkButton>
      </TouchableOpacity>
    );
  };

  return (
    <RootArea edges={["top", "left", "right"]}>
      <Title>Componente</Title>
      <Lista
        data={dataRutas}
        renderItem={renderItem}
        keyExtractor={(data) => data.key}
      />
    </RootArea>
  );
}

const RootArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
`;

const LinkButton = styled.View`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 20px;
  flex-direction: row;
  border: 2px solid #cecece;
  width: 100%;
  justify-content: space-between;
  background-color: #cecece;
`;

const ItemContenedor = styled.View`
  border-radius: 20px;
  flex-direction: row;
  border: 2px solid #cecece;
  width: 100%;
  justify-content: space-between;
  background-color: #cecece;
`;

const Name = styled.Text`
  font-size: 18px;
`;

const Lista = styled.FlatList`
  width: 100%;
  margin: 15px;
  padding: 10px;
`;

const ArrowIcon = styled(MaterialIcons)`
  margin-right: 10px;
  color: black;
`;
