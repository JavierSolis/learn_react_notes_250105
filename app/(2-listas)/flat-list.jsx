import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export function FlatListScreen() {
  const [dataPage, setDataPage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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

  const llamarData = (page) => {
    return Array.from({ length: 20 }).map((_, i) => ({
      product: `Producto ${i + 1 + (page - 1) * 20}`,
      price: `S/.${(Math.random() * 100).toFixed(2)}`,
    }));
  };

  const cargarData = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newData = llamarData(page);
      setDataPage([...dataPage, ...newData]);
      setPage(page + 1);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    cargarData();
  });

  const dataExtensa = Array.from({ length: 1000 }).map((_, i) => ({
    product: `Producto ${i + 1}`,
    price: `S/.${(Math.random() * 100).toFixed(2)}`,
  }));
  data.push(...dataExtensa);

  const renderItem = ({ item }) => (
    <Item>
      <Text>{item.product}</Text>
      <Text>{item.price}</Text>
    </Item>
  );

  return (
    <Contenedor>
      <Title>FLat List (Load)</Title>
      <FlatList
        data={dataPage}
        renderItem={renderItem}
        onEndReached={cargarData}
        onEndReachedThreshold={0.8}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator size="large" color="#000" /> : null
        }
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
