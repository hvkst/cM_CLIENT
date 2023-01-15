import { createContext, useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logoutUser = () => {
    setUser(null);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = BASE_URL + '/auth/verify';
        // console.log('url:', url);

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await res.json();
        // console.log('data.user:', data.user);

        setUser(data.user);
        setLoading(false);
        // console.log('Found User (from Context)');
      } catch (err) {
        console.error('UserContext', err);
      }
    };
    getUser();
  }, []);

  return <UserContext.Provider value={{ user, loginUser: setUser, logoutUser, loading }}>{children}</UserContext.Provider>;
}
