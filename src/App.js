import './App.css';

import withRoot from './modules/withRoot';

import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/Router';

function App() {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

export default withRoot(App);
