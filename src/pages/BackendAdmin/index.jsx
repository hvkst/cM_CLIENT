import { styled } from '@mui/system';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import UserCard from '../../components/UserCard';
import CreateUserForm from '../../components/CreateUserForm';
import { useGetFetch } from '../../hooks/useGetFetch';
import { AllUserContext } from '../../context/AllUserContext';

function BackendAdmin() {
  const { user } = useContext(UserContext);
  const { allUsers, setAllUsers } = useContext(AllUserContext);

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
    data && setAllUsers(data.allUsers);
  }, [data, setAllUsers]);

  return (
    <>
      {user && (
        <>
          <h1>BackendAdmin</h1>
          <hr />
          <CreateUserForm {...{ setAllUsers }} />
          <Flexdiv>{allUsers && allUsers.map((user) => <UserCard key={user._id} {...{ user, setAllUsers }} />)}</Flexdiv>
        </>
      )}
    </>
  );
}

export default BackendAdmin;

const Flexdiv = styled('div')`
  display: flex;
  flex-wrap: wrap;
  & Button {
    margin: 2px;
  }
`;
