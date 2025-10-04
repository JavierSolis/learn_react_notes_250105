import styled from "styled-components/native";

export function PokemonBackButton({ direction = "left", onPress }) {
  return (
    <BackButtonPressed onPress={onPress || (() => {})}>
      <ImageButton direction={direction} />
    </BackButtonPressed>
  );
}

const BackButtonPressed = styled.TouchableOpacity`
  padding: 10px;
  background-color: #ffffffff;
  border-radius: 50px;
  border: 1px solid #625c5c5f;
  shadow-color: #000;

  elevation: 9;
`;
const ImageButton = styled.Image.attrs({
  resizeMode: "contain",
  source: require("../../assets/images/pokedex/button/back_button.png"),
})`
  width: 15px;
  height: 15px;
  color: #0000005f;
  margin: 8px;
  transform: ${(props) =>
    props.direction === "right" ? "rotate(180deg)" : "rotate(0deg)"};
`;

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text`
  font-size: 20px;
`;
