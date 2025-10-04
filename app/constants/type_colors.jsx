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

export const getColorByType = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()] || "#000";
};
