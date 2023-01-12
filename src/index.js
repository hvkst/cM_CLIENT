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
    {/* <ThemeProvider theme={theme}>
      <CssBaseline /> */}
    <UserContextProvider>
      <ProjectContextProvider>
        <AllUserContextProvider>
          <ErrorContextProvider>
            <App />
          </ErrorContextProvider>
        </AllUserContextProvider>
      </ProjectContextProvider>
    </UserContextProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
