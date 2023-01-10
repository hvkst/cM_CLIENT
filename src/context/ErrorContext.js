import { createContext, useState } from 'react';

export const ErrorContext = createContext();

export function ErrorContextProvider({ children }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Context Error Message');

  return <ErrorContext.Provider value={{ error, setError, errorMessage, setErrorMessage }}>{children}</ErrorContext.Provider>;
}
