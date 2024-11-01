import { Link } from 'react-router-dom';
import { ThemeToggler } from './theme-toggler';

export const Navbar = () => {
  return (
    <div className='navbar bg-base-200 px-4 sticky top-0 z-50'>
      <div className='navbar-start gap-4'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <Link to='/pokemons' className='btn btn-ghost btn-sm'>
              Pokémons
            </Link>
            <Link to='/shuffler' className='btn btn-ghost btn-sm'>
              Shuffler
            </Link>
          </ul>
        </div>
        <Link to='/' className='text-xl font-bold'>
          Helodex
        </Link>
        <svg
          width='24'
          height='24'
          viewBox='0 0 121 121'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M60.8371 0.000940392C48.8572 -0.065841 37.1273 3.42559 27.1339 10.0327C17.1405 16.6398 9.33354 26.0651 4.70269 37.1139C0.0718433 48.1628 -1.17449 60.3378 1.12168 72.0958C3.41786 83.8538 9.15316 94.6653 17.6006 103.16C26.0481 111.655 36.8275 117.451 48.5724 119.813C60.3173 122.174 72.499 120.996 83.5736 116.427C94.6482 111.858 104.117 104.104 110.78 94.1477C117.443 84.1913 121 72.481 121 60.5009C121.022 52.578 119.484 44.7284 116.472 37.4001C113.461 30.0718 109.036 23.4084 103.449 17.7904C97.8623 12.1724 91.2237 7.70985 83.9124 4.65753C76.6011 1.6052 68.76 0.0228896 60.8371 0.000940392ZM60.8371 94.5081C53.9648 94.5452 47.2363 92.5412 41.5042 88.7501C35.772 84.959 31.2945 79.5515 28.639 73.2129C25.9835 66.8743 25.2695 59.89 26.5876 53.1452C27.9057 46.4004 31.1966 40.1987 36.0431 35.3263C40.8897 30.4538 47.0736 27.1298 53.8113 25.7757C60.5489 24.4216 67.5368 25.0982 73.8895 27.7198C80.2422 30.3415 85.6736 34.7901 89.4952 40.5019C93.3169 46.2137 95.3569 52.9315 95.3565 59.8039C95.3811 68.9823 91.759 77.7945 85.287 84.3026C78.815 90.8107 70.023 94.4817 60.8447 94.5081H60.8371Z'
            fill='#FAB62D'
          />
        </svg>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <Link to='/pokemons' className='btn btn-ghost btn-sm'>
          Pokémons
        </Link>
        <Link to='/shuffler' className='btn btn-ghost btn-sm'>
          Shuffler
        </Link>
      </div>
      <div className='navbar-end gap-4'>
        <ThemeToggler />
      </div>
    </div>
  );
};
