import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';
import CreateUserForm from '../CreateUserForm';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

function BackendAdmin() {
  const { user, logoutUser } = useContext(UserContext);
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
          <div>
            Here are all the Users! Boom!
            {allUsers && allUsers.map((user) => <p>{user.username}</p>)}
          </div>
        </>
      )}
    </>
  );
}

export default BackendAdmin;
