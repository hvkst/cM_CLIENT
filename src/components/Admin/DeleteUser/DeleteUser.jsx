import { confirmDelete } from '../../../utils';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { AllUserContext } from '../../../context/AllUserContext';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function DeleteUser({ user }) {
  const { setAllUsers } = useContext(AllUserContext);
  const deleteWho = `Delete ${user.username}`;
  const navigate = useNavigate();

  async function deleteUser(id, setAllUsers) {
    try {
      const body = { userId: id };
      console.log('delete this', body);

      const url = BASE_URL + '/admin/user/remove';

      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setAllUsers(data.allUsers);
      navigate('/adminbackend');
      console.log('User deleted on Clientside');
    } catch (err) {
      console.error(err);
    }

    console.log('The end of...deleteUser');
  }

  return (
    <DeletePaper>
      <Typography variant="h5">{deleteWho}</Typography>
      <IconButton
        color="primary"
        onClick={() => {
          confirmDelete(deleteUser, user._id, setAllUsers);
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </DeletePaper>
  );
}
export default DeleteUser;

const DeletePaper = styled(Paper)`
  margin: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
