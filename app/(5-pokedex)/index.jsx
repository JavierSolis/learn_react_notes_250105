import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default function Index() {
  return (
    <Contenedor>
      <StatusBar style="light" />
      <ImagenFondo />
      <Header>
        <ImageUser />
        <Title>Pokédex App</Title>
      </Header>
    </Contenedor>
  );
}

const Contenedor = styled(SafeAreaView)`
  flex: 1;
  background-color: #000;
`;
const Texto = styled.Text`
  font-size: 20px;
`;

const Header = styled.View`
  padding: 15px;
  background-color: transparent;
`;

const ImageUser = styled.Image.attrs({
  source: require("./../../assets/images/pokedex_profile_pokemon.jpg"),
})`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border-width: 5px;
  border-color: #fff;
  align-self: flex-end;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

const ImagenFondo = styled.Image.attrs({
  source: require("./../../assets/images/pokedex_bg_pokebola.png"),
})`
  position: absolute;
  width: 300px;
  height: 300px;
  tint-color: #544f4fff;
  margin-bottom: 20px;
  top: 0;
  right: -10%;
  transform: rotate(230deg);
`;
