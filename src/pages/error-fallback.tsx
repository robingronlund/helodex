import { Link, useNavigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  error: Error | Response;
  resetErrorBoundary: () => void;
}
export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorBoundaryProps) => {
  const navigate = useNavigate();
  const getErrorMessage = (error: Error | Response): string => {
    if (error instanceof Error) {
      return error.message;
    } else if (error instanceof Response) {
      return `Error ${error.status}: ${error.statusText}`;
    } else {
      return 'An unknown error occurred.';
    }
  };

  const errorMessage = getErrorMessage(error);

  const errorDetails =
    error instanceof Response
      ? `This error occurred while fetching data. Please check your network connection or try refreshing the page.`
      : 'This error occurred due to an unexpected issue. If this persists, contact support.';

  return (
    <div className='flex justify-center items-center h-dvh'>
      <div className='card w-full max-w-md bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title text-error'>Something went wrong</h2>
          <p className='text-lg mb-2'>{errorMessage}</p>

          <div className='divider'></div>

          <div className='text-sm'>
            <h3 className='font-semibold'>Error Details:</h3>
            <p>{errorDetails}</p>
          </div>

          <div className='card-actions justify-end mt-4'>
            <button
              className='btn btn-error btn-outline'
              onClick={() => {
                resetErrorBoundary();
                navigate('/');
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
