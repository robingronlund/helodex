import { useNavigate } from 'react-router-dom';

export const GoBackLink = () => {
  const navigate = useNavigate();

  return (
    <button className='btn btn-sm btn-primary' onClick={() => navigate(-1)}>
      <svg
        className='h-6 w-6 fill-current md:h-8 md:w-8'
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        viewBox='0 0 24 24'
      >
        <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'></path>
      </svg>
      Go back
    </button>
  );
};
