import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import MainForm from './pages/MainForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/dashboard',
        element: <MainForm />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
