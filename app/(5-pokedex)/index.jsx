import { Button } from "@react-navigation/elements";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
async function fetchPokemons() {
  const pokemonMasterList = await axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
    .then((response) => response.data);

  const detailPokemonsPromises = pokemonMasterList.results.map(
    async (pokemonMaster) => {
      const detailsByPokemon = await axios
        .get(pokemonMaster.url)
        .then((response) => response.data);

      return {
        name: pokemonMaster.name,
        id: detailsByPokemon.id,
        url: pokemonMaster.url,
        image: detailsByPokemon.sprites.front_default,
        types: detailsByPokemon.types
          .map((typeInfo) => typeInfo.type.name)
          .join(", "),
      };
    }
  );

  return await Promise.all(detailPokemonsPromises);
}

export default function Index() {
  const {
    data = [],
    isPending,
    error,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  const renderContent = () => {
    if (isPending) {
      console.log("🌐 Cargando Pokémons...");
      return (
        <View>
          <ActivityIndicator size="large" color="tomato" />
          <Texto>Cargando Pokémons...</Texto>
        </View>
      );
    }

    if (isError) {
      console.log("❌ Error al cargar Pokémons:", error);
      return (
        <View>
          <ErrorText>❌ Error: {error?.message || "Algo salió mal"}</ErrorText>
          <Button onPress={() => refetch()}>
            <Text>Reintentar</Text>
          </Button>
        </View>
      );
    }
    console.log("✅ Pokémons cargados:", data.length);
    return (
      <BodyPokemons>
        <FlatList
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <Text>
              {index + 1}. {item.name} . {item.types}
            </Text>
          )}
        />
      </BodyPokemons>
    );
  };

  return (
    <Contenedor>
      <StatusBar style="light" />
      <ImagenFondo />
      <Header>
        <ImageUser />
        <Title>Pokédex App</Title>
      </Header>
      {renderContent()}
    </Contenedor>
  );
}
const ErrorText = styled.Text`
  color: white;
`;

const BodyPokemons = styled.View`
  flex: 1;
  padding: 10px;
  margin-top: 20px;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
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
