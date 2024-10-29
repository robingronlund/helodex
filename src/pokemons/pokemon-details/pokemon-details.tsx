import { keepPreviousData, useQueries, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Type } from 'pokenode-ts';
import { Stats } from './components/stats';
import { Abilities } from './components/abilities';
import { Weakness } from './components/weakness';
import { Measurements } from './components/measurements';
import { GoBackLink } from './components/go-back-link';
import { sortTypes } from '../../utils/sorted-types';
import { getSprites } from '../../utils/get-sprites';
import { getColorByTypeName } from '../../utils/get-color-type';
import { extractFlavorText } from '../../utils/flavor-test';
import {
  fetchPokemonByIdOrName,
  fetchPokemonSpecies,
  fetchTypeDetails,
} from '../api/pokemon.api';

export const PokemonDetails = () => {
  const param = useParams();

  const {
    data: pokemon,
    status: pokemonStatus,
    isLoading: isPokemonLoading,
  } = useQuery({
    queryKey: ['pokemon', param.id],
    queryFn: () => fetchPokemonByIdOrName(param.id),
    throwOnError: true,
    staleTime: Infinity,
  });

  const {
    data: species,
    status: speciesStatus,
    isLoading: isSpeciesLoading,
  } = useQuery({
    queryKey: ['species', param.id],
    queryFn: () => fetchPokemonSpecies(param.id),
    placeholderData: keepPreviousData,
    throwOnError: true,
    staleTime: Infinity,
  });

  const types = pokemon?.types.map((typeInfo) => typeInfo.type.name) ?? [];

  /**
   * Query to fetch multiple types at once
   */
  const useFetchTypes = (types: string[]) => {
    return useQueries({
      queries: types.map((type) => ({
        queryKey: ['type', type],
        queryFn: () => fetchTypeDetails(type),
        throwOnError: true,
        enabled: !!type,
      })),
    });
  };

  const queries = useFetchTypes(types);
  const typeData = queries.map((query) => query.data) as Type[];
  const isTypesLoading = queries.some((query) => query.isLoading);
  const isTypesSuccess = queries.every((query) => query.status === 'success');

  const sortedTypes = sortTypes(pokemon?.types ?? []);
  const fetchingState = isPokemonLoading || isSpeciesLoading || isTypesLoading;
  const successState =
    pokemonStatus === 'success' &&
    speciesStatus === 'success' &&
    isTypesSuccess;

  return (
    <div>
      {fetchingState ? (
        <span className='loading loading-ring w-32 absolute top-1/2'></span>
      ) : (
        successState &&
        pokemon && (
          <>
            <GoBackLink />
            <article className='prose'>
              <h1>{pokemon.name}</h1>
              <div className='flex flex-row gap-4'>
                {sortedTypes.map(({ type }, index) => (
                  <div
                    key={`${pokemon.name}-${index}`}
                    className='badge text-white'
                    style={{
                      backgroundColor: getColorByTypeName(type.name),
                      borderColor: getColorByTypeName(type.name),
                    }}
                  >
                    {type.name}
                  </div>
                ))}
              </div>
              <div className='flex'>
                <div>
                  <p>{extractFlavorText(species?.flavor_text_entries)}</p>

                  <div className='grid grid-cols-2 rounded-md'>
                    <Measurements
                      height={pokemon.height}
                      weight={pokemon.weight}
                    />
                    <Abilities abilities={pokemon.abilities} />
                    <Weakness weaknesses={typeData} />
                  </div>
                </div>

                <figure>
                  <img
                    src={getSprites(pokemon.sprites) ?? ''}
                    alt='Pokémon sprite'
                  />
                </figure>
              </div>
            </article>

            <Stats stats={pokemon.stats} />
          </>
        )
      )}
    </div>
  );
};
