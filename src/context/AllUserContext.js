import { createContext, useState } from 'react';

export const AllUserContext = createContext();

export function AllUserContextProvider({ children }) {
  const [allUsers, setAllUsers] = useState(null);

  return <AllUserContext.Provider value={{ allUsers, setAllUsers }}>{children}</AllUserContext.Provider>;
}
