import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import HomeLanding from './pages/HomeLanding';
import { Suspense } from 'react';
import AuthLayout from './layouts/AuthLayout/index.js';
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';

export default function useRouteElement() {
  return useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <Suspense>
          <HomeLanding />
        </Suspense>
      )
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: 'login',

      element: (
        <AuthLayout>
          <Suspense>
            <Login />
          </Suspense>
        </AuthLayout>
      )
    },
    {
      path: 'register',
      element: (
        <AuthLayout>
          <Suspense>
            <Register />
          </Suspense>
        </AuthLayout>
      )
    }
  ]);
}
