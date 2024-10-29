import { PokemonType } from 'pokenode-ts';

export const sortTypes = (types: PokemonType[]) => {
  return types.sort((a, b) => a.slot - b.slot);
};
