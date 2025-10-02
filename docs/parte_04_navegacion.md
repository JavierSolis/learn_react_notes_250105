# Parte 04 — Navegación

**Índice**

<!-- Índice actualizado -->

1. [Inicia en](#inicia-en)
2. [Tabs](#tabs)
3. [Drawer](#drawer)
4. [Fetch API](#fetch-api)
   - [fetch](#fetch)
   - [Axios](#axios)
   - [TanStack Query](#tanstack-query)
5. [React Query DevTools](#react-query-devtools)

## Inicia en

Inicia en: https://youtu.be/GaXEzkDs6Yk?t=17407

## Tabs

- Se debe agrupar y usar el componente `Tabs`. Se pueden personalizar los íconos de tabs y demás partes.

```jsx
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#e91e63" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: () => (
            <MaterialIcons
              color={"#202ae5"}
              size={20}
              name="access-time-filled"
            />
          ),
        }}
      />
      <Tabs.Screen name="about" />
    </Tabs>
  );
}
```

## Drawer

- Instalar según: https://docs.expo.dev/router/advanced/drawer/

```shell
npx expo install @react-navigation/drawer react-native-reanimated react-native-worklets
```

- En el video lo rodea de `GestureHandlerRootView`, esto era en versiones anteriores a la actual donde ya no es necesario.
- Se puede personalizar el drawer, el label, etc.

```jsx
import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerInactiveTintColor: "tomato",
          drawerInactiveTintColor: "gray",
          drawerLabelStyle: { fontWeight: "bold", fontSize: 30 },
          drawerIcon: () => (
            <MaterialIcons name="home" size={30} color="black" />
          ),
          drawerLabel: "Home",
          title: "Index Drawer",
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerInactiveTintColor: "tomato",
          drawerInactiveTintColor: "gray",
          drawerLabel: "About",
          title: "About Drawer",
        }}
      />
    </Drawer>
  );
}
```

## Fetch API

### fetch

Se usó REST Client extension para las pruebas de los endpoints: https://www.youtube.com/watch?v=xDe4qYjU314

Se usará una API de: https://free-apis.github.io/#/
Ojo con las propiedades de `response`.

```jsx
import { useEffect, useState } from "react";
...

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://emojihub.yurace.pro/api/all")
      .then((response) => {
        if (!response.ok) {
          setData([{ name: "Error" }]);
          throw new Error("Error en request");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      });

   axios.get("").then(response)
  }, []);

  return (
    <Contenedor>
      <Texto>Componente Fetch</Texto>
      {data?.map((item, index) => (
        <Texto key={index}>{item.name}</Texto>
      ))}
    </Contenedor>
  );
}
...
```

### Axios

Instalar:

```shell
npm i axios
```

Reemplazar fetch por axios:

```jsx
axios.get("https://emojihub.yurace.pro/api/all").then((response) => {
  setData(response.data);
});
```

### TanStack Query

El más usado: https://tanstack.com/

```shell
npm i @tanstack/react-query
```

Se tiene que definir un `QueryClientProvider`, esto debe estar en el más alto de la jerarquía, para que todos compartan los datos y configuración que da este provider.

Piénsalo como un repositorio central (singleton), para que todas las pantallas dentro lo usen y tengan una configuración central. También se puede usar en cada pantalla, pero obligaría a reconstruirlo cada vez.

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

// 🎯 EDUCATIVO: Crear UNA SOLA instancia del cliente
// Esto se ejecuta solo una vez cuando la app inicia
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos - datos se consideran "frescos"
      gcTime: 10 * 60 * 1000, // 10 minutos - cuánto tiempo mantener en cache
      retry: 3, // Reintentar 3 veces si falla
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </QueryClientProvider>
  );
}
```

Luego en cada pantalla al usar `useQuery` internamente está obteniéndolo del `QueryClientProvider`. Tiene propiedades útiles:

- **Retry**: en caso haya error
- **Refetch**: para consultar nuevamente
- **staleTime**: para invalidar el cache según un tiempo
- **Estados**: estado de cargando para mostrar feedback al usuario, hacer más dinámica la pantalla, si salió error, etc.

```jsx
import { useQuery } from "@tanstack/react-query";
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
    </Container>
  );
}
...
```

## React Query DevTools

- Se intentó usar pero no funciona para React Native. Hay opciones como logging interceptado con Axios.
