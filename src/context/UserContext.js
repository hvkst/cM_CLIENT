import { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../hooks/config';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const logoutUser = () => {
    setUser(null);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = BASE_URL + '/auth/verify';
        console.log('url:', url);

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await res.json();
        console.log('data.user:', data.user);

        setUser(data.user);
        console.log('Found User (from Context)');
      } catch (err) {
        console.error('UserContext', err);
      }
    };
    getUser();
  }, []);

  return <UserContext.Provider value={{ user, loginUser: setUser, logoutUser }}>{children}</UserContext.Provider>;
}
