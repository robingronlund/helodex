import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PokemonCard } from '../components/pokemon-card';
import { fetchPokemonByIdOrName } from '../api/pokemon.api';
import { getSprites } from '../../utils/get-sprites';

export const PokemonShuffler = () => {
  const getRandomId = () => Math.floor(Math.random() * 1025); // 1025 is the highest pokemon ID available
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [id, setId] = useState(getRandomId);

  const {
    data: pokemon,
    status,
    isFetching,
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => fetchPokemonByIdOrName(undefined, id),
    throwOnError: true,
    staleTime: Infinity,
  });

  const shufflePokemon = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setId(getRandomId());
    }, 400);
  };

  return (
    <div className='flex flex-col items-center mt-4 gap-7 w-full'>
      <article className='prose'>
        <p>
          Want to browse pokémons in a more randomised maner? Then try the
          shuffler!
        </p>
      </article>
      <div className='min-h-80'>
        <div className={isAnimating ? 'animate-fadeOutLeft' : ''}>
          {status === 'success' && (
            <PokemonCard
              name={pokemon.name}
              types={pokemon?.types}
              sprite={getSprites(pokemon.sprites)}
              size='lg'
            />
          )}
        </div>
      </div>
      <button
        className='btn w-28 '
        onClick={shufflePokemon}
        disabled={isFetching}
      >
        {isFetching ? (
          <span className='loading loading-spinner'></span>
        ) : (
          'Shuffle'
        )}
      </button>
    </div>
  );
};
