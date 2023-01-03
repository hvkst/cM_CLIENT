// import { BASE_URL } from './config';

import { useEffect, useState } from 'react';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const useGetFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(BASE_URL + url, {
          method: 'GET',
          credentials: 'include',
        });
        const resData = await res.json();
        if (res.ok) {
          setData(resData);
        } else {
          throw new Error(resData.error);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);

  return data;
};