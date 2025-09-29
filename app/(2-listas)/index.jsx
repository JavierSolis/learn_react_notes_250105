import { FlatList, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default function Componente() {
  const data = [
    { product: "Cervesa", price: "S/.10.00" },
    { product: "Papas", price: "S/.5.00" },
    { product: "Gaseosa", price: "S/.8.00" },
    { product: "Agua", price: "S/.4.00" },
    { product: "Ceviche", price: "S/.20.00" },
    { product: "Lomo Saltado", price: "S/.25.00" },
    { product: "Arroz con Pollo", price: "S/.18.00" },
    { product: "Pollo a la Brasa", price: "S/.30.00" },
    { product: "Anticuchos", price: "S/.15.00" },
    { product: "Chicha Morada", price: "S/.6.00" },
  ];

  const dataSecionList = [
    {
      title: "Bebidas",
      data: [
        { product: "Cervesa", price: "S/.10.00" },
        { product: "Gaseosa", price: "S/.8.00" },
        { product: "Agua", price: "S/.4.00" },
        { product: "Chicha Morada", price: "S/.6.00" },
      ],
    },
    {
      title: "Comida",
      data: [
        { product: "Ceviche", price: "S/.20.00" },
        { product: "Lomo Saltado", price: "S/.25.00" },
        { product: "Arroz con Pollo", price: "S/.18.00" },
        { product: "Pollo a la Brasa", price: "S/.30.00" },
        { product: "Anticuchos", price: "S/.15.00" },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <Item>
      <Text>{item.product}</Text>
      <Text>{item.price}</Text>
    </Item>
  );

  const renderHeader = ({ section }) => <Text>{section.title}</Text>;

  return (
    <Contenedor>
      <Title>FLat List</Title>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.product}
      />

      <Title style={{ paddingTop: 30 }}>Section List</Title>
      <SectionList
        sections={dataSecionList}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(item) => item.product}
      />
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
