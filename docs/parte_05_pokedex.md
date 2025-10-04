# Parte 05 — Pokedex

**Índice**

<!-- Índice actualizado -->

1. [Inicia en](#inicia-en)

## Inicia en

Inicia en: https://youtu.be/GaXEzkDs6Yk?t=20353

## Mockup

![mockup pokedex](images/pokedex_mockup.png)

## Api

Se esta usando https://pokeapi.co/ , se creo el rchivo pokedex.http para las pruebas

```http
GET https://pokeapi.co/api/v2/pokemon/?limit=10
```

## Carga de pokemons usan tanstack

**_TIP: queryKey es el alias que usara para guardar en cache_**

```jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
function fetchPokemons() {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
    .then((response) => response.data);
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
          <RetryButton onPress={() => refetch()}>
            <RetryText>Reintentar</RetryText>
          </RetryButton>
        </View>
      );
    }
    console.log("✅ Pokémons cargados:", data.results.length);
    return (
      <BodyPokemons>
        <FlatList
          data={data.results}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <Text>
              {index + 1}. {item.name}
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
...
```

## Carga de pokemon con mas info

- En este caso se hizo un get adicional por cada pokemon para obtener su tip y mas datos ya que no venia en la lista maestra
- Se uso algo nuevo Promise.all para esperar todos los async de map, si no se usa asi es una lista de promesas
- Los map se ejecutan en paralelo por lo cual el orden se mantiene al espear todas las promesas

```jsx
...
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
...
```

## Carga de pokemon infinito

- La idea es poder scrolear hasta cargar todos lso pokemon

- Primer acercamiento, se usa useuqryInifinite, declara las varuables nuevas
- se agregla configracion de cache 0 para poder probar mejor la pantalla
- al usar querinifnite la estructura que retorna cambia, notar que se debe agregar "resutlts" ya que es parte de la estructura que espera

```jsx
import { useInfiniteQuery } from "@tanstack/react-query";
...
async function fetchPokemons() {
  ...OJO
  return { results: resultAllPokemomWhitDetails };
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
    ...
    console.log("✅ Pokémons cargados: ", data.length);
    console.log(JSON.stringify(data, null, 2));//se ve "pages" en su estructura
    const allPokemonData = data?.pages?.flatMap((page) => page.results) ?? [];
    console.log("✅ Pokémons cargados: ", allPokemonData.length);
    console.log(JSON.stringify(allPokemonData, null, 2));
    return (
      <BodyPokemons>
        <FlatList
          data={allPokemonData}
          ...
          >
        </FlatList>
      </BodyPokemons>
    );
  };
  ...
}
...
```
