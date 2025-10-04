import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { PokemonBackButton } from "../../components/5-pokedex-components/PokemonButton";
import { getColorByType } from "../constants/type_colors";

// Función para obtener iconos por tipo
const getTypeIcon = (type) => {
  const iconMap = {
    grass: "leaf",
    fire: "fire",
    water: "water",
    electric: "flash",
    bug: "bug",
    normal: "circle",
    poison: "skull",
    ground: "earth",
    flying: "airplane",
    psychic: "eye",
    rock: "diamond-stone",
    ghost: "ghost",
    dragon: "dragon",
    dark: "moon",
    steel: "cog",
    fairy: "star",
    fighting: "fist",
    ice: "snowflake",
  };
  return iconMap[type.toLowerCase()] || "circle";
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function DetailScreen() {
  const { item } = useLocalSearchParams();
  const pokemon = JSON.parse(item);

  console.log("Pokemon recibido:", item);
  return (
    <Contenedor>
      {/* Círculo grande de fondo */}
      <LinearGradient
        colors={[
          getColorByType(pokemon.types[0]),
          hexToRgba(getColorByType(pokemon.types[0]), 0.3),
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: 250,
          top: -200,
          left: -40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={getTypeIcon(pokemon.types[0])}
          size={300}
          color="rgba(255, 255, 255, 0.2)"
          style={{ marginTop: 200 }}
        />
      </LinearGradient>

      <Header>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            padding: 10,
            borderRadius: 50,
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>

        <HeadIconPokebola />
      </Header>

      {/* Gradiente de fondo */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 250,
          paddingHorizontal: 15,
        }}
      >
        <PokemonImage source={{ uri: pokemon.image }} />
        <PokemonBackButton />
        <PokemonBackButton direction="right" />
      </View>
      <View
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PokemonName>
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </PokemonName>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignSelf: "flex-end",
            }}
          >
            nvl. <Text style={{ fontWeight: "bold", fontSize: 33 }}>36</Text>
          </Text>
        </View>

        <View
          style={{
            alignItems: "flex-end",
            centerContent: "center",
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PokemonID>{"#" + (pokemon.id + "").padStart(3, "0")}</PokemonID>
          <Text
            style={{
              fontSize: 20,
              opacity: 0.5,
              alignSelf: "flex-start",
            }}
          >
            Evolución
          </Text>
        </View>
      </View>
      <View style={{ padding: 20, flexDirection: "row", gap: 10 }}>
        {pokemon.types.map((type) => (
          <View
            key={type + Math.random()}
            backgroundColor={getColorByType(type)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 40,
              gap: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
          >
            <MaterialCommunityIcons
              name={getTypeIcon(type)}
              size={30}
              color={"white"}
            />
            <Text
              style={{
                color: "white",
                textTransform: "capitalize",
                fontSize: 20,
              }}
            >
              {type}
            </Text>
          </View>
        ))}
      </View>

      <Text style={{ padding: 20, fontSize: 20, lineHeight: 24 }}>
        Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode
        causar incêndios florestais soprando chamas.
      </Text>
    </Contenedor>
  );
}

const PokemonID = styled.Text`
  font-size: 30px;
  opacity: 0.5;
  font-weight: bold;
  align-self: flex-start;
`;
const PokemonImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  width: 270px;
  height: 270px;
  margin-left: -105px;
  margin-top: 65px;
`;

const HeadIconPokebola = styled.Image.attrs({
  resizeMode: "contain",
  source: require("../../assets/images/pokedex/pokedex_ic_pokebola_head.png"),
})`
  width: 40px;
  height: 40px;
`;

// Componente para el fondo degradado
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
  margin-top: 40px;
`;

const Contenedor = styled.View`
  flex: 1;
  position: relative;
`;
const PokemonName = styled.Text`
  font-size: 45px;
  font-weight: bold;
  margin-top: 30px;
`;

const ArrowIcon = styled(MaterialIcons)`
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
  color: black;
  border: 1px solid black;
  border-radius: 50px;
`;
