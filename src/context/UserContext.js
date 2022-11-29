import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const logoutUser = () => {
    setUser(null);
  };

  return <UserContext.Provider value={{ user, loginUser: setUser, logoutUser }}>{children}</UserContext.Provider>;
}
