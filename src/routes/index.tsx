import { Routes, Route, RouteProps } from 'react-router-dom';
import { Register } from '../pages/Registrer';

const routeList: RouteProps[] = [
  {
    path: '/Cadastrar',
    element: <Register />,
  },
];

export const Router = () => (
  <Routes>
    {routeList.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Routes>
);
