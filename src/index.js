import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { UserContextProvider } from './context/UserContext';
import { ProjectContextProvider } from './context/ProjectContext';
import { AllUserContextProvider } from './context/AllUserContext';
import { ErrorContextProvider } from './context/ErrorContext';
import App from './App';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ProjectContextProvider>
        <AllUserContextProvider>
          <ErrorContextProvider>
            <App />
          </ErrorContextProvider>
        </AllUserContextProvider>
      </ProjectContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
