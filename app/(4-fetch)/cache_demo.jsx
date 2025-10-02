import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";

// 🎯 EDUCATIVO: Función que simula una API lenta
async function fetchEmojisWithDelay() {
  console.log("🌐 Haciendo petición HTTP...");

  // Simular delay de red (2 segundos)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://emojihub.yurace.pro/api/all");
  const data = await response.json();

  console.log("✅ Datos recibidos!");
  return data.slice(0, 20); // Solo 20 para demo
}

export default function CacheDemo() {
  // 🔗 Acceso directo al queryClient (para demos avanzadas)
  const queryClient = useQueryClient();

  // 🎯 useQuery con clave específica
  const { data, isPending, error, refetch, dataUpdatedAt, isStale } = useQuery({
    queryKey: ["emojis-demo"], // 🔑 Clave única
    queryFn: fetchEmojisWithDelay, // 🚀 Función (solo se ejecuta si no hay cache)
    staleTime: 30000, // 30 segundos - sobrescribe default
  });

  // 🧪 Funciones para demostrar el cache
  const clearCache = () => {
    queryClient.removeQueries({ queryKey: ["emojis-demo"] });
    console.log("🗑️ Cache limpiado");
  };

  const getCacheInfo = () => {
    const cacheData = queryClient.getQueryData(["emojis-demo"]);
    const cacheState = queryClient.getQueryState(["emojis-demo"]);

    console.log("📊 Datos en cache:", cacheData ? "SÍ" : "NO");
    console.log("📊 Estado:", cacheState?.status);
    console.log(
      "📊 Última actualización:",
      new Date(cacheState?.dataUpdatedAt || 0)
    );
  };

  if (isPending) {
    return (
      <Container>
        <Title>🔄 Cargando desde API...</Title>
        <ActivityIndicator size="large" color="tomato" />
        <SubTitle>
          Observa la consola - verás cuando se hace la petición HTTP
        </SubTitle>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorText>❌ Error: {error.message}</ErrorText>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>🧠 Demo del Cache</Title>
        <CacheInfo isStale={isStale}>
          {isStale ? "📡 Datos obsoletos" : "✨ Datos frescos"}
        </CacheInfo>
        <LastUpdate>
          Última actualización: {new Date(dataUpdatedAt).toLocaleTimeString()}
        </LastUpdate>
      </Header>

      <ButtonContainer>
        <ActionButton onPress={refetch}>
          <ButtonText>🔄 Refetch (Nueva petición)</ButtonText>
        </ActionButton>

        <ActionButton onPress={clearCache}>
          <ButtonText>🗑️ Limpiar Cache</ButtonText>
        </ActionButton>

        <ActionButton onPress={getCacheInfo}>
          <ButtonText>📊 Ver Info Cache (consola)</ButtonText>
        </ActionButton>
      </ButtonContainer>

      <ScrollView>
        <DataTitle>📦 Datos ({data.length} items)</DataTitle>
        {data.map((item, index) => (
          <DataItem key={index}>
            <ItemText>
              {index + 1}. {item.name}
            </ItemText>
            {item.category && <CategoryText>📂 {item.category}</CategoryText>}
          </DataItem>
        ))}
      </ScrollView>

      <Instructions>
        <InstructTitle>🎓 Experimento:</InstructTitle>
        <InstructText>1. Navega a otra pestaña y regresa</InstructText>
        <InstructText>2. Observa que NO se hace nueva petición</InstructText>
        <InstructText>3. Espera 30 segundos y regresa</InstructText>
        <InstructText>4. Ahora SÍ hará nueva petición (stale)</InstructText>
      </Instructions>
    </Container>
  );
}

// 🎨 Estilos
const Container = styled.View`
  flex: 1;
  background-color: #f8f9fa;
`;

const Header = styled.View`
  padding: 20px;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: #e9ecef;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
`;

const CacheInfo = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  color: ${(props) => (props.isStale ? "#e74c3c" : "#27ae60")};
  font-weight: 600;
`;

const LastUpdate = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-top: 4px;
  color: #7f8c8d;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 12px;
  color: #6c757d;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  padding: 16px;
  gap: 8px;
`;

const ActionButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #3498db;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
`;

const DataTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 16px;
  color: #2c3e50;
`;

const DataItem = styled.View`
  background-color: white;
  margin: 4px 16px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

const ItemText = styled.Text`
  font-size: 14px;
  color: #2c3e50;
`;

const CategoryText = styled.Text`
  font-size: 12px;
  color: #7f8c8d;
  margin-top: 4px;
`;

const ErrorText = styled.Text`
  color: #e74c3c;
  font-size: 16px;
  text-align: center;
`;

const Instructions = styled.View`
  background-color: #fff3cd;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ffeaa7;
`;

const InstructTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #856404;
  margin-bottom: 8px;
`;

const InstructText = styled.Text`
  font-size: 14px;
  color: #856404;
  margin-bottom: 4px;
`;
