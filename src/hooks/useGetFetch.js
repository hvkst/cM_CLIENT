import { useEffect, useState } from 'react';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const useGetFetch = (url) => {
  const [data, setData] = useState(null);
  const target = `${BASE_URL}${url}`;
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(target, {
          method: 'GET',
          credentials: 'include',
        });
        const resData = await res.json();
        if (res.ok) {
          // console.log('resData from GetFetch after res.ok', resData);
          setData(resData);
        } else {
          throw new Error(resData.error);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [target, url]);

  return data;
};
