import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Form from './pages/Form';
import { TableSort } from './pages/Table';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'form',
        element: <Form />,
      },
      {
        path: 'table',
        element: <TableSort />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
