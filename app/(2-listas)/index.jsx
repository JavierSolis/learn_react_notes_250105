import { useRouter } from "expo-router";
import styled from "styled-components/native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";
import { FlatListScreen } from "./flat-list";
import { GradientesScreen } from "./gradientes";
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
    {
      key: 2,
      name: "Gradientes",
      component: <GradientesScreen />,
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
      <GradientBackground />
      <Title>Seleccione una categoría</Title>
      <CategoriaSection>
        {dataRutas.map((item) => renderItem(item))}
      </CategoriaSection>
      <ContentComponent>{dataRutas[selectedOption].component}</ContentComponent>
    </RootArea>
  );
}

const GradientBackground = styled(LinearGradient).attrs({
  colors: ["#7b6da1ff", "transparent"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 },
})`
  position: absolute;
  width: 100%;
  height: 50%;
`;

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
  position: relative;
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
