import { PokemonSprites } from 'pokenode-ts';

export const getSprites = (sprites?: PokemonSprites) => {
  if (!sprites?.other) return '';

  return sprites.other['official-artwork'].front_default;
};
