# Parte 04 — Navegación

**Índice**

<!-- Índice actualizado -->

1. [Inicia en](#inicia-en)

## Inicia en

Inicia en: https://youtu.be/GaXEzkDs6Yk?t=17407

## Tabs

- Se debe agrupar y usar el componete tabs, se puede personalizar los iconos de tabs y demas partes

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

- instalar segun https://docs.expo.dev/router/advanced/drawer/

```shell
npx expo install @react-navigation/drawer react-native-reanimated react-native-worklets
```

- En el video lo rodea de gestureHandlerRootView, esto era en verrisoneanteriores a la actual donde ya no es necesario
- Se pued epersonalizar el tab el label, etc

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

## Fetch Api

Se uso rest clietn extention para las pruebas de los endpoint https://www.youtube.com/watch?v=xDe4qYjU314

Se usara una api de https://free-apis.github.io/#/
Ojo con la propiedade s de response

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
