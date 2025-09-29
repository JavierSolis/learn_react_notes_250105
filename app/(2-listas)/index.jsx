import { useRouter } from "expo-router";
import styled from "styled-components/native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { FlatListScreen } from "./flat-list";
import { SectionListScreen } from "./section-list";

export default function index() {
  const route = useRouter();
  const dataRutas = [
    {
      key: 0,
      name: "FlatList",
      component: <FlatListScreen />,
    },
    {
      key: 1,
      name: "SectionList",
      component: <SectionListScreen />,
    },
  ];

  const [selectedOption, setSelectedOption] = useState(0);

  const renderItem = (item) => {
    //const item = itemR.item;
    return (
      <TouchableaOption
        key={item.key}
        selected={selectedOption === item.key}
        onPress={() => {
          setSelectedOption(item.key);
        }}
      >
        <LinkButton>
          <ItemContenedor>
            <Name>{item.name}</Name>
          </ItemContenedor>
        </LinkButton>
      </TouchableaOption>
    );
  };

  return (
    <RootArea edges={["top", "left", "right"]}>
      <Title>Seleccione una categoría</Title>
      {/*<Lista
        data={dataRutas}
        renderItem={renderItem}
        keyExtractor={(data) => data.key}
      />*/}
      <CategoriaSection>
        {dataRutas.map((item) => renderItem(item))}
      </CategoriaSection>
      <ContentComponent>{dataRutas[selectedOption].component}</ContentComponent>
    </RootArea>
  );
}

const CategoriaSection = styled.View`
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  --justify-content: space-between;
`;

const TouchableaOption = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? "#ADD8E6" : "transparent")};
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;
const RootArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-top: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const LinkButton = styled.View`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: 2px solid #cecece;
`;

const ItemContenedor = styled.View`
  flex-direction: column;
`;

const Name = styled.Text`
  font-size: 18px;
`;

const Lista = styled.FlatList`
  padding: 8px;
`;
//componentes
const ContentComponent = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;

  background-color: rgba(188, 224, 233, 1);
`;
