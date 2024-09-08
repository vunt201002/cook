import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import HomeLanding from './pages/HomeLanding';

export default function useRouteElement() {
  return useRoutes([
    {
      path: '/',
      index: true,
      element: <HomeLanding />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);
}
