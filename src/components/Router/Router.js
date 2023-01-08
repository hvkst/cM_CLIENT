import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Main/Navbar/Navbar';
// import SignupForm from '../Admin/SignupForm/SignupForm';
import LoginForm from '../Admin/LoginForm/LoginForm';
import BackendAdmin from '../../pages/BackendAdmin/BackendAdmin';
import UserBackend from '../../pages/UserBackend/UserBackend';
import Homepage from '../../pages/Homepage/Homepage';
import ErrorBoundary from '../Main/ErrorBoundary/ErrorBoundary';
import AdminUserPage from '../../pages/AdminUserPage/AdminUserPage';
import ContactForm from '../../pages/ContactForm/Contactform';
// import Products from '../../pages/Products/Products';
// import AboutUs from '../../pages/AboutUs/AboutUs';

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
      { path: '/userbackend', element: <UserBackend /> },
      { path: '/contactform', element: <ContactForm /> },
      // { path: '/products', element: <Products /> },
      // { path: '/about', element: <AboutUs /> },
    ],
  },
]);
