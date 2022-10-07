import { Routes, Route, RouteProps } from 'react-router-dom';
import { Register } from '../pages/Registrer';
import { Login } from '../pages/Login';
import { User } from '../pages/UserList';

const routeList: RouteProps[] = [
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user',
    element: <User />,
  },
];

export const Router = () => (
  <Routes>
    {routeList.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Routes>
);
