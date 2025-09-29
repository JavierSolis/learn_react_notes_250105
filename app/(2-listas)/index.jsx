import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styled from "styled-components/native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const route = useRouter();
  const dataRutas = [
    { key: 1, name: "FlatList", href: "/(1-conversor)" },
    { key: 2, name: "SectionList", href: "/(2-listas)" },
  ];

  const [selectedOption, setSelectedOption] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <TouchableaOption
        selected={selectedOption === item.key}
        onPress={() => {
          setSelectedOption(item.key);
        }}
      >
        <LinkButton>
          <ItemContenedor>
            <Name>{item.name}</Name>
            <ArrowIcon name="arrow-forward-ios" color="black" />
          </ItemContenedor>
        </LinkButton>
      </TouchableaOption>
    );
  };

  return (
    <RootArea edges={["top", "left", "right"]}>
      <StatusBar style="dark" />
      <Title>Menú</Title>
      <Lista
        data={dataRutas}
        renderItem={renderItem}
        keyExtractor={(data) => data.key}
      />
    </RootArea>
  );
}

const TouchableaOption = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? "#ADD8E6" : "transparent")};
  border-radius: 20px;
  margin-bottom: 10px;
`;
const RootArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
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
