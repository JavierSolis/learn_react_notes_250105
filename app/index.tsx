import { useRouter } from "expo-router";
import { useState } from "react";
import { Button } from "react-native";
import { styled, ThemeProvider } from "styled-components/native";
import { Colors } from "../styles/themes";

export default function Screen1() {
  const router = useRouter();

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  const currentTheme = isDarkTheme ? Colors.dark1 : Colors.light1;

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Title>Holaaaaa</Title>
        <Button title="Ir a 2.11" onPress={() => router.push("/screen2")} />
        <Button title="Cambiar tema" onPress={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

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
