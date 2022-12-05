import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../consts';
import { shorterTime } from '../../utils';

function AdminUserPage({ user }) {
  const [fullUserData, setFullUserdata] = useState();
  const params = useParams();

  console.log(BASE_URL + '/admin/user' + params.id);

  useEffect(() => {
    const getFullUserData = async () => {
      try {
        const res = await fetch(BASE_URL + '/admin/user/' + params.id, {
          method: 'GET',
          credentials: 'include',
        });
        const resJson = await res.json();
        if (res.ok) {
          setFullUserdata(resJson);
          console.log('resJSON', resJson);
        } else {
          throw new Error(resJson.error);
        }
      } catch (error) {
        console.warn(error.message);
      }
    };
    getFullUserData();
  }, [params.id]);

  return (
    <>
      <h1>AdminUserPage</h1>
      {fullUserData && (
        <>
          <p>params.id {params.id}</p>
          <p>user: {fullUserData.user[0].username}</p>
          <p>project: {fullUserData.user[0].project[0].title}</p>
          <p>created at: {shorterTime(fullUserData.user[0].project[0].createdAt)}</p>
          <p>due date: {fullUserData.user[0].project[0].dueDate}</p>
        </>
      )}
    </>
  );
}
export default AdminUserPage;
