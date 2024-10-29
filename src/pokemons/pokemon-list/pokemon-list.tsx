import { keepPreviousData, useQueries, useQuery } from '@tanstack/react-query';
import { Pokemon } from 'pokenode-ts';
import { PokemonCard } from '../components/pokemon-card';
import { Paginator } from './components/paginator';
import { fetchPokemonByIdOrName, fetchPokemons } from '../api/pokemon.api';
import { useCurrentPage } from '../../context/current-page.context';
import { getSprites } from '../../utils/get-sprites';

export const PokemonList = () => {
  const { currentPage, setCurrentPage } = useCurrentPage();

  const { data, status, isFetching, isLoading, isPlaceholderData } = useQuery({
    queryKey: ['pokemons', currentPage],
    queryFn: () => fetchPokemons(currentPage),
    placeholderData: keepPreviousData,
    throwOnError: true,
    staleTime: Infinity,
  });

  const useFetchTypes = (pokemonNames: string[]) => {
    return useQueries({
      queries: pokemonNames.map((name) => ({
        queryKey: ['pokemon', name],
        queryFn: () => fetchPokemonByIdOrName(name),
        throwOnError: true,
        enabled: !!name,
      })),
    });
  };

  const totalPages = data?.count ? Math.ceil(data.count / 12) : 0;
  const pagindatedPokemons = data?.results ?? [];

  const queries = useFetchTypes(
    pagindatedPokemons.map((pokemon) => pokemon.name)
  );
  const pokemons = queries.map((query) => query.data) as Pokemon[];
  const isPokemonsLoading = queries.some((query) => query.isLoading);
  const isPokemonsSuccess = queries.every(
    (query) => query.status === 'success'
  );

  const successState = status === 'success' && isPokemonsSuccess;
  const loadingState = isLoading || isPokemonsLoading;

  return (
    <div className='flex flex-col items-center mt-4 gap-7'>
      <article className='prose'>
        <p>
          Browse through every known pokémon to mankind, click to view more
          details
        </p>
      </article>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        hasNextPage={data?.next !== null}
        isFetching={isFetching}
        isPreviousData={isPlaceholderData}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {loadingState ? (
        <span className='loading loading-ring w-32 absolute top-1/2'></span>
      ) : (
        successState && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
            {pokemons.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  types={pokemon.types}
                  sprite={getSprites(pokemon.sprites)}
                  size='sm'
                />
              );
            })}
          </div>
        )
      )}
    </div>
  );
};
