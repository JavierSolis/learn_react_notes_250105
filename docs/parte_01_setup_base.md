# Parte 01 — Notas

**Índice**

1. [Pasos básicos para iniciar el proyecto / SETUP](#pasos-básicos-para-iniciar-el-proyecto--setup)
2. [Crear la aplicación](#crear-la-aplicación)
3. [Distribución de componentes](#distribución-de-componentes)
4. [Navegación entre pantallas](#navegación-entre-pantallas)
5. [Estilos](#estilos)
6. [Style components](#style-components)
7. [Thema](#thema)<br>7.1 [Cambios puntuales para arreglar el error de `theme.background`](#cambios-puntuales-para-arreglar-el-error-de-themebackground)
8. [Touchable](#touchable)
9. [Imágenes](#imágenes)
10. [ScrollView e Input](#scrollview-e-input)
11. [Fin de las notas iniciales](#fin-de-las-notas-iniciales)

## Pasos básicos para iniciar el proyecto / SETUP

En la carpeta: instala Node.js de tal forma que cada proyecto pueda usar su propia versión.

1. Instalar NVM (para controlar versiones)

   Sigue la guía oficial e instala/exporta las variables:

   ```shell
   # Instrucciones y enlace
   https://github.com/nvm-sh/nvm#installing-and-updating
   ```

2. Instalar la versión de Node que quieras usar en el proyecto

   ```shell
   echo "lts/iron" > .nvmrc  # o la versión que uses, p. ej. 18.0.0
   # con `nvm use` se usará lo definido en ese archivo
   nvm use
   ```

## Crear la aplicación

```bash
npx create-expo-app califica-taxi
```

> Nota: los paréntesis en los nombres de carpetas/archivos indican grupos en la estructura de rutas (ej.: `(tabs)`).

## Distribución de componentes

Para revisar la forma de distribuir los componentes (flexbox):

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Flex viene por defecto en React Native.

---

## Navegación entre pantallas

```ts
import { useRouter } from "expo-router";
import { Button } from "react-native";

// Screen1
export default function Screen1() {
  const router = useRouter();
  return (
    // ...
    <Button title="Ir a 2" onPress={() => router.push("/screen2")} />
    // ...
  );
}

// Screen2
export default function Screen2() {
  return (
    // ...
    <Button title="Screen 2 - Volver" onPress={() => router.back()} />
    // ...
  );
}
```

---

## Estilos

```ts
import { StyleSheet, View, Text } from "react-native";

export default function Screen1() {
  // ...
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...
  },
  text: {
    color: "#cecece",
    fontSize: 20,
  },
});
```

## Style components

Es para reutilizar los estilos web

```shell
 npm i styled-components
```

\*\* Se está creando un nuevo tag Title que hereda de Text

```ts
...
import styled from "styled-components/native";

export default function Screen1() {
  return (
    ...
      <Title>Holaaa</Title>
    ...
  );
}

const Title = styled.Text`
  color: #cecece;
  font-size: 20px;
`;

```

## Thema

Para agregar un tema

```ts
...
import { Colors } from "../styles/themes";

export default function Screen1() {
  ...
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  const currentTheme = isDarkTheme ? Colors.dark1 : Colors.light1;

  return (
    <ThemeProvider theme={currentTheme}>
        ...
    </ThemeProvider>
  );
}

const Container = styled.View`
 ...
  background-color: ${({ theme }) => theme.background};
`;

```

### Cambios puntuales para arreglar el error de `theme.background`

- Añadido `types/styled.d.ts` con una declaración que extiende `DefaultTheme` (module augmentation) para `styled-components` y `styled-components/native`.
  - Se declararon las propiedades usadas en el proyecto: `primary`, `text`, `background`, `tint`, `icon`, `tabIconDefault`, `tabIconSelected`.
- Actualizado `tsconfig.json` para incluir `"**/*.d.ts"` en el array `include`, de modo que TypeScript cargue el archivo de declaraciones.
- Reiniciar el servidor de TypeScript (en VS Code: "TypeScript: Restart TS Server") o reiniciar el bundler para que los cambios surtan efecto en el editor/compilación.
- Nota: en tiempo de ejecución el objeto `theme` ya contenía `background` (en `styles/themes.tsx`); este ajuste sólo solucionó la verificación estática (TypeScript) para evitar el error `Property 'background' does not exist on type 'DefaultTheme'`.

## Touchable

https://youtu.be/GaXEzkDs6Yk?t=4971

```ts
...
import { Button, TouchableHighlight } from "react-native";
...

export default function Screen1() {
  ...
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prev) => prev + 1);
  ...
  return (
    ...
        <TouchableHighlight
          underlayColor="#DDDEEE"
          activeOpacity={0.6}
          onPress={onPress}
        >
          <Title>Presioname :{count}</Title>
        </TouchableHighlight>
    ...
  );
}

```

## Imágenes

https://youtu.be/GaXEzkDs6Yk?t=5301

```ts
import { Image } from "react-native";
import imagenLogo from "../assets/images/favicon.png";

...

export default function Screen1() {
  ...
  return (
    ...
        <Imagen source={require("../assets/images/icon.png")} />
        <Imagen source={imagenLogo} />

    ...
  );
}

const Imagen = styled.Image`
  width: 100px;
  height: 100px;
`;
...
```

## ScrollView e Input

\*\* el keyboard type no restringe sino que valida en caso ser formulario

```ts
import { ScrollView } from "react-native";
...

export default function Screen1() {
  return (
    <ThemeProvider theme={currentTheme}>
      <ScrollView>
        <Container>
          ...
          <TextEntrada
            keyboardType="numeric"
            placeholder="Ingrese su numero aquí"
          ></TextEntrada>
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}

const TextEntrada = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  color: #151313ff;
  background-color: #ffffff;
`;

```
