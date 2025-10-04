const POKEMON_TYPE_ICONS = {
  normal: require("../../assets/images/pokedex/type/normal.svg"),
  fire: require("../../assets/images/pokedex/type/fire.svg"),
  water: require("../../assets/images/pokedex/type/water.svg"),
  electric: require("../../assets/images/pokedex/type/electric.svg"),
  grass: require("../../assets/images/pokedex/type/grass.svg"),
  ice: require("../../assets/images/pokedex/type/ice.svg"),
  fighting: require("../../assets/images/pokedex/type/fighting.svg"),
  poison: require("../../assets/images/pokedex/type/poison.svg"),
  ground: require("../../assets/images/pokedex/type/ground.svg"),
  flying: require("../../assets/images/pokedex/type/flying.svg"),
  psychic: require("../../assets/images/pokedex/type/psychic.svg"),
  bug: require("../../assets/images/pokedex/type/bug.svg"),
  rock: require("../../assets/images/pokedex/type/rock.svg"),
  ghost: require("../../assets/images/pokedex/type/ghost.svg"),
  dragon: require("../../assets/images/pokedex/type/dragon.svg"),
  dark: require("../../assets/images/pokedex/type/dark.svg"),
  steel: require("../../assets/images/pokedex/type/steel.svg"),
  fairy: require("../../assets/images/pokedex/type/fairy.svg"),
};

export const getIconByType = (type) => {
  return POKEMON_TYPE_ICONS[type.toLowerCase()] || POKEMON_TYPE_ICONS.normal;
};

export { POKEMON_TYPE_ICONS };
