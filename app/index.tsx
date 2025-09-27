import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, TouchableHighlight } from "react-native";
import { styled, ThemeProvider } from "styled-components/native";
import { Colors } from "../styles/themes";

export default function Screen1() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const onPress = () => setCount((prev) => prev + 1);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  const currentTheme = isDarkTheme ? Colors.dark1 : Colors.light1;

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Title>Holaaaaa</Title>

        <TouchableHighlight
          underlayColor="#DDDEEE"
          activeOpacity={0.6}
          onPress={onPress}
        >
          <Title>Presioname :{count}</Title>
        </TouchableHighlight>

        <Button title="Ir a 2.12" onPress={() => router.push("/screen2")} />
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
