import { Button } from "@react-navigation/elements";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { PokemonCard } from "../../components/5-pokedex-components/PokemonCard";

async function fetchPokemons({
  pageParam = "https://pokeapi.co/api/v2/pokemon/?limit=10",
}) {
  const pokemonMasterList = await axios
    .get(pageParam)
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
        //image: detailsByPokemon.sprites.front_default,
        image:
          detailsByPokemon.sprites.other.showdown.front_default ||
          detailsByPokemon.sprites.front_default,
        types: detailsByPokemon.types.map((typeInfo) => typeInfo.type.name),
        //.join(", "),//lo obtendremos como array
      };
    }
  );

  const resultAllPokemomWhitDetails = await Promise.all(detailPokemonsPromises);
  return { ...pokemonMasterList, results: resultAllPokemomWhitDetails };
}

export default function Index() {
  /**
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
  */
  const {
    data = [],
    isPending,
    error,
    refetch,
    isError,
    fetchNextPage, //indica la funcion para cargar la siguiente pagina
    hasNextPage, //indica si hay mas paginas
    isFetchingNextPage, //indica si se esta cargando la siguiente pagina
  } = useInfiniteQuery({
    staleTime: 0,
    gcTime: 0,
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
    getNextPageParam: (p) => p.next || undefined,
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

    console.log("✅ Pokémons cargados: ", data.length);
    console.log(JSON.stringify(data, null, 2));
    const allPokemonData = data?.pages?.flatMap((page) => page.results) ?? [];
    //console.log("✅ Pokémons cargados: ", allPokemonData.length);
    //console.log(JSON.stringify(allPokemonData, null, 2));
    return (
      <BodyPokemons>
        <FlatList
          numColumns={2}
          data={allPokemonData}
          keyExtractor={(item, index) => index + ">" + item.name}
          renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) {
              console.log("Cargando siguiente pagina...");
              fetchNextPage();
            }
          }}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator size="large" color="tomato" />
            ) : null
          }
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
  margin-top: 8px;
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
  source: require("../../assets/images/pokedex/pokedex_profile_pokemon.jpg"),
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
  source: require("./../../assets/images/pokedex/pokedex_bg_pokebola.png"),
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
