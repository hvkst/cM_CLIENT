// import { styled } from '@mui/system';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import UserCard from '../../components/Admin/UserCard/UserCard';
import CreateUserForm from '../../components/Admin/CreateUserForm/CreateUserForm';
import { useGetFetch } from '../../hooks/useGetFetch';
import { AllUserContext } from '../../context/AllUserContext';
import { PageContainer, UserCardContainer } from './BackendAdmin.style';

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
        navigate('/userbackend');
      }
    }
  }, [user, navigate]);

  // Get all users
  const data = useGetFetch('/admin/user');

  useEffect(() => {
    data && setAllUsers(data.allUsers);
  }, [data, setAllUsers]);

  return (
    <div className="content-container">
      <PageContainer>
        {user && (
          <>
            <h1>AdminBackend</h1>
            <CreateUserForm {...{ setAllUsers }} />
            <UserCardContainer>{allUsers && allUsers.map((user) => <UserCard key={user._id} {...{ user, setAllUsers }} />)}</UserCardContainer>
          </>
        )}
      </PageContainer>
    </div>
  );
}

export default BackendAdmin;
