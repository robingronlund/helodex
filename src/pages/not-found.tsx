import { Link } from 'react-router-dom';
import charmanderImage from '../assets/charmander.png';

export const NotFound = () => {
  return (
    <div
      className='flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative'
      style={{ backgroundImage: `url(${charmanderImage})` }}
    >
      <div className='flex flex-col gap-3 absolute top-1/4 right-[15%] w-96'>
        <h1 className='text-4xl text-white'>Oh oh! 404</h1>
        <p className='text-white'>
          It seems like you're lost in the Pokémon world. Let's get you back on
          track!
        </p>

        <Link to='/' className='btn btn-secondary btn-sm self-start'>
          Take me home!
        </Link>
      </div>
    </div>
  );
};
