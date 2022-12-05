import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';
import BackendAdmin from '../BackendAdmin';
import BackendUser from '../BackendUser';
import Homepage from '../Homepage';
import ErrorBoundary from '../ErrorBoundary';
import AdminUserPage from '../AdminUserPage';
// import { useContext } from 'react';

// function loader() {}

// function User() {
//   const user = useLoaderData();
// }

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/signup', element: <SignupForm /> },
      { path: '/adminbackend', element: <BackendAdmin /> },
      { path: '/adminbackend/user/:id', element: <AdminUserPage /> },
      { path: '/userbackend', element: <BackendUser /> },
    ],
  },
]);
