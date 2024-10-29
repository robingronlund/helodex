import { Outlet } from 'react-router-dom';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../pages/error-fallback';
import { Navbar } from '../components/navbar';

const FallbackRender = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <ErrorFallback
    error={error}
    resetErrorBoundary={resetErrorBoundary}
  ></ErrorFallback>
);

export const MainLayout = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={FallbackRender}>
          <div className='w-full h-dvh'>
            <Navbar />
            <div className='flex flex-col items-center px-12 py-12'>
              <Outlet />
            </div>
          </div>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
