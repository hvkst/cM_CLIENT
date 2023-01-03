// import { styled } from '@mui/system';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import UserCard from '../../components/Admin/UserCard';
import CreateUserForm from '../../components/Admin/CreateUserForm';
import { useGetFetch } from '../../hooks/useGetFetch';
import { AllUserContext } from '../../context/AllUserContext';
import { FlexDiv } from '../../styles';
import SimpleAccordion from '../../components/Main/SimpleAccordion';

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
    <>
      {user && (
        <>
          <h1>BackendAdmin</h1>
          <hr />
          <SimpleAccordion title="create User">
            <CreateUserForm {...{ setAllUsers }} />
          </SimpleAccordion>
          <FlexDiv>{allUsers && allUsers.map((user) => <UserCard key={user._id} {...{ user, setAllUsers }} />)}</FlexDiv>
        </>
      )}
    </>
  );
}

export default BackendAdmin;
