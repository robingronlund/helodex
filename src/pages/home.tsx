import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 gap-7'>
      <article className='prose'>
        <h1>Welcome to Helodex</h1>

        <div className='flex flex-col items-center gap-6'>
          <p>
            Welcome to Helodex, the place to explore everything about your
            favorite Pokémons. Find detailed profiles, stats, and stories for
            each one, bringing the world of Pokémon to life. Begin your
            adventure and uncover the secrets of the Pokémon world.
          </p>
        </div>
      </article>

      <div>
        <Link to='/pokemons' className='btn btn-primary'>
          Gotta catch 'em all!
        </Link>
      </div>
    </div>
  );
};
