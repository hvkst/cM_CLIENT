import { styled } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';
import UserCard from '../Card';
import CreateUserForm from '../CreateUserForm';

function BackendAdmin() {
  const { user } = useContext(UserContext);
  const [allUsers, setallUsers] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await fetch(BASE_URL + '/admin/user', {
          method: 'GET',
          credentials: 'include',
        });
        const resJson = await res.json();
        if (res.ok) {
          setallUsers(resJson.allUsers);
          console.log(resJson);
        } else {
          throw new Error(resJson.error);
        }
      } catch (error) {
        console.warn(error.message);
      }
    };
    getAllUsers();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user) {
      if (!user.isAdmin) {
        navigate('/backenduser');
      }
    }
  }, [user, navigate]);

  return (
    <>
      {user && (
        <>
          <h1>BackendAdmin</h1>
          <hr />
          <CreateUserForm />
          <Flexdiv>{allUsers && allUsers.map((user) => <UserCard {...{ user }} />)}</Flexdiv>
        </>
      )}
    </>
  );
}

export default BackendAdmin;

const Flexdiv = styled('div')`
  display: flex;
`;
