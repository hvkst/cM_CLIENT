import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Main/Navbar/Navbar';
import LoginForm from '../Admin/LoginForm/LoginForm';
import AdminBackend from '../../pages/AdminBackend/AdminBackend';
import UserBackend from '../../pages/UserBackend/UserBackend';
import Homepage from '../../pages/Homepage/Homepage';
import ErrorBoundary from '../Main/ErrorBoundary/ErrorBoundary';
import AdminUserPage from '../../pages/AdminUserPage/AdminUserPage';
import ContactForm from '../../pages/ContactForm/Contactform';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/login', element: <LoginForm /> },
      // { path: '/signup', element: <SignupForm /> },
      { path: '/adminbackend', element: <AdminBackend /> },
      { path: '/adminbackend/user/:id', element: <AdminUserPage /> },
      { path: '/userbackend', element: <UserBackend /> },
      { path: '/contactform', element: <ContactForm /> },
    ],
  },
]);
