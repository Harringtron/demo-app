import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './generic-routes/Root.tsx';
import ErrorPage from './generic-routes/ErrorPage.tsx';
import DogDetails from './features/dogs/pages/DogDetails.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dogs/:dogId',
    element: <DogDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
