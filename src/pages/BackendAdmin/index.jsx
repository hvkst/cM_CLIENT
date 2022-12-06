import { styled } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import UserCard from '../../components/Card';
import CreateUserForm from '../../components/CreateUserForm';
import { useGetFetch } from '../../hooks/useGetFetch';

function BackendAdmin() {
  const { user } = useContext(UserContext);
  const [allUsers, setallUsers] = useState();

  const navigate = useNavigate();

  // Check if user is Admin
  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user) {
      if (!user.isAdmin) {
        navigate('/backenduser');
      }
    }
  }, [user, navigate]);

  // Get all users
  const data = useGetFetch('/admin/user');

  useEffect(() => {
    data && setallUsers(data.allUsers);
  }, [data]);

  return (
    <>
      {user && (
        <>
          <h1>BackendAdmin</h1>
          <hr />
          <CreateUserForm />
          <Flexdiv>{allUsers && allUsers.map((user) => <UserCard key={user._id} {...{ user }} />)}</Flexdiv>
        </>
      )}
    </>
  );
}

export default BackendAdmin;

const Flexdiv = styled('div')`
  display: flex;
`;
