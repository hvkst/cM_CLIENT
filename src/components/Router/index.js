import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';
import BackendAdmin from '../BackendAdmin';
import BackendUser from '../BackendUser';
import Homepage from '../Homepage';
import ErrorBoundary from '../ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/signup', element: <SignupForm /> },
      { path: '/backendadmin', element: <BackendAdmin /> },
      { path: '/backenduser', element: <BackendUser /> },
    ],
  },
]);
