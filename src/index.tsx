import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';

import './index.css';
import { CurrentPageProvider } from './context/current-page.context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CurrentPageProvider>
        <RouterProvider router={router} />
      </CurrentPageProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
