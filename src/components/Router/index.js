import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';
import BackendAdmin from '../BackendAdmin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { path: '/login', element: <LoginForm /> },
      { path: '/signup', element: <SignupForm /> },
      { path: '/backendadmin', element: <BackendAdmin /> },
    ],
  },
]);
