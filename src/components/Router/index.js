import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Main/Navbar/index';
import SignupForm from '../Admin/SignupForm';
import LoginForm from '../Admin/LoginForm';
import BackendAdmin from '../../pages/BackendAdmin';
import BackendUser from '../../pages/BackendUser';
import Homepage from '../../pages/Homepage';
import ErrorBoundary from '../Main/ErrorBoundary';
import AdminUserPage from '../../pages/AdminUserPage';
import PortfolioPage from '../../pages/PortfolioPage';
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
      { path: '/portfolio', element: <PortfolioPage /> },
    ],
  },
]);
