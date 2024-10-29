import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { PokemonList } from './pokemons/pokemon-list/pokemon-list';
import { PokemonDetails } from './pokemons/pokemon-details/pokemon-details';
import { PokemonShuffler } from './pokemons/pokemon-shuffler/pokemon-shuffler';
import { MainLayout } from './layout/main-layout';
import { NotFound } from './pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/pokemons',
        element: <PokemonList />,
      },
      {
        path: '/pokemons/:id',
        element: <PokemonDetails />,
      },
      {
        path: '/shuffler',
        element: <PokemonShuffler />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
