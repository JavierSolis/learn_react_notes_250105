import styled from "styled-components/native";

export function PokemonCard({ pokemon }) {
  return (
    <Contenedor>
      <Texto>{pokemon.name}</Texto>
    </Contenedor>
  );
}

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text`
  font-size: 20px;
`;
