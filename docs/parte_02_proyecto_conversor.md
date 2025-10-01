# Parte 02 — Proyecto conversor

**Índice**

<!-- Índice actualizado -->

1. [Navegación según Expo](#navegación-según-expo)
2. [Snippet](#snippet)
3. [Imagen por URL](#imagen-por-url)
4. [Ejemplo básico de un input y cómo procesarlo (ej. Conversor)](#ejemplo-básico-de-un-input-y-cómo-procesarlo-ej-conversor)

## Navegación según Expo

- Se movió todo lo anterior a la carpeta teoría
- Para usar stack, se creó un archivo "\_layout.tsx" que Expo toma por defecto
- En el layout se puede poner 1-conversor/index pero por convención se coloca (1-conversor) y también la carpeta se cambió a ese nombre, así Expo entiende que debe ir a esa carpeta que es un grupo de layout y tiene su propio \_layout, como su propio índice de pantallas
- Por eso la carpeta de 1-conversor se pasó a llamar (1-conversor); esto le indica a Expo que es un grupo

## Snippet

- Ir a https://snippet-generator.app/, ahí se puede crear una plantilla reusable e ingresar los datos
- En VS Code en comandos buscar "snippet" > configuración > agregar global y pegar lo generado en la página, quedará algo así; en este caso se creó una plantilla de componente con styled

```json
{
  "para crear react componentes con styled": {
    "prefix": "rnc",
    "body": [
      "import styled from \"styled-components/native\";",
      "",
      "export default function Componente() {",
      "  return (",
      "    <Contenedor>",
      "      <Texto>Componente</Texto>",
      "    </Contenedor>",
      "  );",
      "}",
      "",
      "const Contenedor = styled.View`",
      "  flex: 1;",
      "  justify-content: center;",
      "  align-items: center;",
      "`;",
      "const Texto = styled.Text`",
      "  font-size: 20px;",
      "`;",
      ""
    ],
    "description": "para crear react componentes con styled"
  }
}
```

- Luego en el archivo se puede escribir "rnc" y aparecerá como opción para que se inserte la plantilla

## Imagen por URL

```tsx
...
      <Icon
        source={{ uri: "https://i.ibb.co/xTXWP76/modista.png" }}
        resizeMode="contain"
      />
...
const Icon = styled.Image`
  width: 204px;
  height: 204px;
`;

```

\*\* TIP: Se puede usar https://imgbb.com/ para subir cualquier imagen y obtener su URL

## Ejemplo básico de un input y cómo procesarlo (ej. Conversor)

```jsx
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

export default function Conversor() {
  const [cmInput, setCmInput] = useState("");
  const [metros, setMetros] = useState("");
  const convertirCmAM = () => {
    if (!cmInput) {
      Alert.alert("Error", "Por favor ingresa un valor en cm");
    }
    let m = parseFloat(cmInput) / 100;
    setMetros(m);
  };

  return (
    <Contenedor>
      <Input
  placeholder="Centímetros"
        keyboardType="numeric"
        inputMode="numeric"
        returnKeyType="done"
        onChangeText={setCmInput}
      />
      <CalculateButton onPress={convertirCmAM}>
        <ButtonText>Calcular</ButtonText>
      </CalculateButton>
      <ResultText>
        Resultado: {isNaN(metros) ? "" : metros + " metros"}
      </ResultText>
      <BackButton onPress={() => router.back()}>
        <ButtonText>Volver</ButtonText>
      </BackButton>
    </Contenedor>
  );
}
...
estilos
...

```
