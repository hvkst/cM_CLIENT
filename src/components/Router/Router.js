import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Main/Navbar/Navbar';
// import SignupForm from '../Admin/SignupForm/SignupForm';
import LoginForm from '../Admin/LoginForm/LoginForm';
import BackendAdmin from '../../pages/BackendAdmin/BackendAdmin';
import BackendUser from '../../pages/BackendUser/BackendUser';
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
      { path: '/adminbackend', element: <BackendAdmin /> },
      { path: '/adminbackend/user/:id', element: <AdminUserPage /> },
      { path: '/userbackend', element: <BackendUser /> },
      { path: '/contactform', element: <ContactForm /> },
    ],
  },
]);
