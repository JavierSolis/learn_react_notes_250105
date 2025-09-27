import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import { styled, ThemeProvider } from "styled-components/native";
import { Colors } from "../../styles/themes";

import imagenLogo from "../../assets/images/favicon.png";

export default function Screen1() {
  const router = useRouter();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme = isDarkTheme ? Colors.dark1 : Colors.light1;

  return (
    <ThemeProvider theme={currentTheme}>
      <ScrollView>
        <Container>
          <Imagen source={require("../../assets/images/icon.png")} />
          <Imagen source={imagenLogo} />
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

const Imagen = styled.Image`
  width: 100px;
  height: 100px;
`;

const Title = styled.Text`
  color: #151313ff;
  font-size: 40px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;
