import {
  Pokemon,
  NamedAPIResourceList,
  PokemonSpecies,
  Type,
} from 'pokenode-ts';

const baseUrl = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (page: number = 0) => {
  const limit = 12;
  const offset = page * limit;
  const response = await fetch(
    `${baseUrl}/pokemon/?limit=${limit}&offset=${offset}`
  );
  const data: NamedAPIResourceList = await response.json();

  return data;
};

export const fetchPokemonByIdOrName = async (name?: string, id?: number) => {
  const param = name ?? id;
  const response = await fetch(`${baseUrl}/pokemon/${param}`);
  const data: Pokemon = await response.json();

  return data;
};

export const fetchPokemonSpecies = async (name?: string) => {
  const param = name;
  const response = await fetch(`${baseUrl}/pokemon-species/${param}`);
  const data: PokemonSpecies = await response.json();

  return data;
};

export const fetchTypeDetails = async (type: string) => {
  const response = await fetch(`${baseUrl}/type/${type}`);
  const data: Type = await response.json();

  return data;
};
