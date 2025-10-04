import styled from "styled-components/native";

export function PokemonCard({ pokemon }) {
  const POKEMON_TYPE_COLORS = {
    normal: "#A4ACAF",
    fire: "#FD7D24",
    water: "#4592C4",
    electric: "#EED535",
    grass: "#9BCC50",
    ice: "#51C4E7",
    fighting: "#D56723",
    poison: "#B97FC9",
    ground: "#F7DE3F",
    flying: "#3DC7EF",
    psychic: "#F366B9",
    bug: "#729F3F",
    rock: "#A38C21",
    ghost: "#7B62A3",
    dragon: "#53A4CF",
    dark: "#707070",
    steel: "#9EB7B8",
    fairy: "#FDB9E9",
  };
  const primaryType = pokemon.types[0];
  const backgroundColor = POKEMON_TYPE_COLORS[primaryType] || "#000";

  return (
    <Contenedor backgroundColor={backgroundColor}>
      <PokemonImage source={{ uri: pokemon.image }} />
      <PokemonID>#{(pokemon.id + "").padStart(3, 0)}</PokemonID>
      <PokemonName>{pokemon.name}</PokemonName>
    </Contenedor>
  );
}

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor || "#753030ff"};
  padding: 15px;
  margin: 10px;
  height: 220px;
  justify-content: center;
  position: relative;
  margin-top: 40px;
`;

const PokemonID = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  opacity: 0.5;
  margin-top: 70px;
`;

const PokemonImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 150px;
  width: 150px;
  position: absolute;
  top: -30px;
  justify-content: bottom;
  align-items: bottom;
`;

const PokemonName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(45, 45, 45, 0.1);
  border-radius: 10px;
  padding: 5px 10px;
  color: #fff;
  position: absolute;
  bottom: 13px;
`;
