# Parte 03 — Listas

**Índice**

<!-- Índice actualizado -->

1. [Inicia en](#inicia-en)
2. [FlatList](#flatlist)
3. [Uso de href para pantallas](#uso-de-href-para-pantallas)
4. [Styled en componentes no nativos](#styled-en-componentes-no-nativos)
5. [Vector icons](#vector-icons)
6. [Safe Area en Expo](#safe-area-en-expo)
7. [Status bar](#status-bar)
8. [Router vs useRouter](#router-vs-userouter)
9. [Ejemplo de FlatList y SectionList](#ejemplo-de-flatlist-y-sectionlist)
10. [Nuevas propiedades para más dinamismo](#nuevas-propiedades-para-mas-dinamismo)
11. [Paso de propiedades (MUY IMPORTANTE)](#paso-de-propiedades-muy-importante)
12. [Inyectar componentes](#inyectar-componentes)
13. [Gradient](#gradient)
14. [Listas paginadas](#listas-paginadas)

## Inicia en

Inicia en: https://youtu.be/GaXEzkDs6Yk?t=8600

## FlatList

Doc oficial: https://reactnative.dev/docs/flatlist

- Según la documentación oficial, el layout se carga primero; si existe un `index`, éste se carga primero.
- Se crea un menú en `index` para que desde ahí se pueda escoger a qué pantalla ir.

```jsx
import { FlatList } from "react-native";
...
export default function Componente() {
  const dataRutas = [
    { key: 1, name: "(1-conversor)" },
    { key: 2, name: "(2-listas)" },
  ];

  const renderItem = ({ item }) => <Title>Título: {item.name}</Title>;

  return (
    ...
      <FlatList
        data={dataRutas}
        renderItem={renderItem}
        keyExtractor={(data) => data.key}
      />
    ...
  );
}

const Title = styled.Text`
  font-size: 20px;
`;

```

## Uso de href para pantallas

- Se puede usar `href` y navegar a cada carpeta sin usar los paréntesis `()` para indicar grupo. Es cuestión de gustos. Con `href` se puede prescindir de declararlo como grupo, aunque los grupos ayudan a organizar.

```tsx
import { Link } from "expo-router";
...
export default function Componente() {
  const dataRutas = [
    { key: 1, name: "(1-conversor)", href: "/(1-conversor)" },
    { key: 2, name: "(2-listas)", href: "/(2-listas)" },
  ];

  const renderItem = ({ item }) => {
    return (
      <Link href={item.href}>
        <Title>Título: {item.name}</Title>
      </Link>
    );
  };

  return (
    ...
      <FlatList
        data={dataRutas}
        renderItem={renderItem}
        keyExtractor={(data) => data.key}
        ...
  );

}
...


```

## Styled en componentes no nativos

Se usa la sintaxis `styled(<Componente no nativo>)` para que lo tome como estilo y poder usarlo como si fuera un componente estilizado.

```tsx
...
const renderItem = ({ item }) => {
    return (
      <LinkButton href={item.href}>
        <Title>Título: {item.name}</Title>
      </LinkButton>
    );
  };
...
const LinkButton = styled(Link)`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 20px;
  flex-direction: row;
  border: 2px solid #cecece;
  width: 100%;
`;
```

## Vector icons

Página de íconos para buscar: https://icons.expo.fyi/Index
Si se usan `MaterialIcons`, asegurarse de que el ícono elegido pertenezca a ese set.

```tsx
import { MaterialIcons } from "@expo/vector-icons";
...
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
```

## Safe Area en Expo

En el video se usa `SafeAreaView` nativo, pero en Expo existe uno que nos ahorra el trabajo de la lógica: usar `SafeAreaView` de `react-native-safe-area-context` (con styled-components también funciona bien).

```tsx
...
import { SafeAreaView } from "react-native-safe-area-context";

export default function Componente() {
  ...
  return (
    <RootArea edges={["top", "left", "right"]}>
      <Title>Componente</Title>
      <Lista
        data={dataRutas}
        renderItem={renderItem}
        keyExtractor={(data) => data.key}
      />
    </RootArea>
  );
}

const RootArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;
...
```

## Status bar

En caso se quiera modificar el estilo se puede usar `StatusBar` de Expo.

```tsx
...
import { StatusBar } from "expo-status-bar";
...
      <StatusBar style="dark" />
...
```

## Router vs useRouter

- `useRouter` se usa cuando quieres navegar desde código (ej. en un handler). Si sólo es navegación visual directa, se puede usar `<Link />`.

## Ejemplo de FlatList y SectionList

```tsx
import { FlatList, SectionList } from "react-native";
...

export default function Componente() {
  const data = [
    { product: "Cervesa", price: "S/.10.00" },
    ...
  ];

  const dataSecionList = [
    {
      title: "Bebidas",
      data: [
        { product: "Cervesa", price: "S/.10.00" },
        ...
      ],
    },
    {
      title: "Comida",
      data: [
        { product: "Ceviche", price: "S/.20.00" },
        ...
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
...
```

## Nuevas propiedades para más dinamismo

Se pueden asignar nuevas propiedades a los componentes y usarlas en los estilos para hacerlos dinámicos según su valor. En el ejemplo se agregó la prop `selected` y un `useState` para cambiar los estilos de las opciones.

```tsx
//2-listas/index
import { useState } from "react";
...

export default function index() {
  ...
  const [selectedOption, setSelectedOption] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <TouchableaOption
        selected={selectedOption === item.key}
        onPress={() => {
          setSelectedOption(item.key);
        }}
      >
        ...
      </TouchableaOption>
    );
  };
  ...
}

const TouchableaOption = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? "#ADD8E6" : "transparent")};
  border-radius: 20px;
  margin-bottom: 10px;
`;
...

```

## Paso de propiedades (MUY IMPORTANTE)

- Cuando se llama a una función como `f(item)` y su definición es `function f({ item }) {}`, lo que realmente hace es desestructurar la propiedad `item` de un objeto cuyo shape sería `{ item: ... }`. Si le pasas directamente un objeto que no tiene esa forma, fallará.
- El uso de llaves `{}` en los parámetros indica desestructuración: accedes a propiedades específicas del objeto, no al objeto completo.

```tsx
// Ejemplo
const dato = { item: "item", name: "b" };

function A1(obj) {
  console.log(obj.name);
}
A1(dato); // imprimirá b

function A2({ name }) {
  console.log(name);
}
A2(dato); // imprimirá b

[dato].map((x) => A1({ item: x }));
// imprimirá undefined (el objeto pasado no tiene name)

[dato].map(({ item }) => A1(item));
// ERROR porque 'item' es un string, no un objeto con name

[dato].map(({ item }) => A2(item));
// ERROR porque 'item' es un string y no tiene 'name'

[dato].map((x) => A2(x));
// imprimirá b
```

## Inyectar componentes

Se pueden importar componentes y agregarlos de forma dinámica (por ejemplo, almacenados en un arreglo) o directamente en el JSX.

```tsx
...
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
    ...
  ];

  const [selectedOption, setSelectedOption] = useState(0);

  return (
    ...
      <ContentComponent>{dataRutas[selectedOption].component}</ContentComponent>
    ...

  );
}
```

## Gradient

Para hacer `styled` de `LinearGradient` no se pasan los estilos directamente como props; se pueden definir valores por defecto mediante `.attrs` y luego estilizar con styled-components.

```jsx
...
import { LinearGradient } from "expo-linear-gradient";

export default function index() {
 ...

 return (
   <RootArea edges={["top", "left", "right"]}>
     <GradientBackground />
     ...
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
...
```

## Listas paginadas

`FlatList` ofrece propiedades para implementar carga incremental (infinite scroll). `onEndReached` indica desde qué punto (medido por `onEndReachedThreshold`) debe dispararse la carga. Además, se puede usar un `ActivityIndicator` para mostrar al usuario que se están cargando más datos.

```jsx
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export function FlatListScreen() {
  const [dataPage, setDataPage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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
```
