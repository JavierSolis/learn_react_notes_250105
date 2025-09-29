import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default function FLatList() {
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

  const renderItem = ({ item }) => (
    <Item>
      <Text>{item.product}</Text>
      <Text>{item.price}</Text>
    </Item>
  );

  return (
    <Contenedor>
      <Title>FLat List</Title>
      <FlatList
        data={data}
        renderItem={renderItem}
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
