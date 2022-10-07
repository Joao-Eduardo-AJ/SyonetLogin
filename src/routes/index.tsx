import { Routes, Route, RouteProps } from 'react-router-dom';
import { Register } from '../pages/Registrer';
import { Login } from '../pages/Login';

const routeList: RouteProps[] = [
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export const Router = () => (
  <Routes>
    {routeList.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Routes>
);
