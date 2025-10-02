import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import { ActivityIndicator, FlatList } from "react-native";
import styled from "styled-components/native";

function fetchEmojis() {
  return axios
    .get("https://emojihub.yurace.pro/api/all")
    .then((response) => response.data);
}

export default function TanstackScreen() {
  const {
    data = [],
    isPending,
    error,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["emojis-all"],
    queryFn: fetchEmojis,
    // ✅ Usa configuración global del _layout (5min staleTime, 3 retry, etc.)
  });

  if (isPending) {
    return (
      <Contenedor>
        <ActivityIndicator size="large" color="tomato" />
        <Texto>Cargando con TanStack Query...</Texto>
      </Contenedor>
    );
  }

  if (isError) {
    return (
      <Contenedor>
        <ErrorText>❌ Error: {error?.message || "Algo salió mal"}</ErrorText>
        <RetryButton onPress={() => refetch()}>
          <RetryText>🔄 Reintentar</RetryText>
        </RetryButton>
      </Contenedor>
    );
  }

  const limitedData = data.slice(0, 40); // Limitar para rendimiento

  return (
    <Container>
      <Header>
        <Title>🏆 TanStack Query ({limitedData.length})</Title>
        <Subtitle>Cache automático y reintentos</Subtitle>
      </Header>

      <FlatList
        data={limitedData}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => (
          <EmojiCard>
            <EmojiNumber>{index + 1}</EmojiNumber>
            <EmojiInfo>
              <EmojiName>{item.name}</EmojiName>
              {item.category && (
                <EmojiCategory>📂 {item.category}</EmojiCategory>
              )}
              {item.group && <EmojiGroup>🏷️ {item.group}</EmojiGroup>}
            </EmojiInfo>
          </EmojiCard>
        )}
        ItemSeparatorComponent={() => <Separator />}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f8f9fa;
`;

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Header = styled.View`
  padding: 20px 16px 10px;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: #e9ecef;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #7f8c8d;
  text-align: center;
  margin-top: 4px;
`;

const Texto = styled.Text`
  font-size: 16px;
  color: #6c757d;
  margin-top: 12px;
`;

const ErrorText = styled.Text`
  font-size: 18px;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 16px;
`;

const RetryButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 12px 24px;
  border-radius: 8px;
`;

const RetryText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const EmojiCard = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  flex-direction: row;
  align-items: flex-start;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 3;
`;

const EmojiNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #e74c3c;
  margin-right: 12px;
  min-width: 30px;
`;

const EmojiInfo = styled.View`
  flex: 1;
`;

const EmojiName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
`;

const EmojiCategory = styled.Text`
  font-size: 12px;
  color: #7f8c8d;
  margin-bottom: 2px;
`;

const EmojiGroup = styled.Text`
  font-size: 12px;
  color: #95a5a6;
`;

const Separator = styled.View`
  height: 12px;
`;
