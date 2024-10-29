import { useNavigate } from 'react-router-dom';
import { PokemonType } from 'pokenode-ts';
import { sortTypes } from '../../utils/sorted-types';
import { getColorByTypeName } from '../../utils/get-color-type';
import { getSizeClass } from '../../utils/get-size-classes';

interface PokemonCardProps {
  name: string;
  types?: PokemonType[];
  sprite?: string | null;
  size?: 'sm' | 'md' | 'lg';
}

export const PokemonCard = ({
  name,
  types,
  sprite,
  size,
}: PokemonCardProps) => {
  const navigate = useNavigate();

  const sortedTypes = types && sortTypes(types);

  return (
    <button
      className='card bg-base-200 min-w-44 shadow-md transform transition-transform hover:scale-105 cursor-pointer'
      onClick={() => navigate(`/pokemons/${name}`)}
    >
      <div className='card-body flex items-center justify-center'>
        <figure className={getSizeClass(size)}>
          <img src={sprite ?? ''} alt='Pokémon sprite' />
        </figure>
        <h2 className='card-title'>{name}</h2>
        <div className='flex flex-row gap-4'>
          {sortedTypes?.map(({ type }, index) => (
            <div
              key={`${name}-${index}`}
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
      </div>
    </button>
  );
};
