import { useContext } from 'react';
import { AllUserContext } from '../../../context/AllUserContext';
import { useNavigate } from 'react-router-dom';

import { Button, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// import confirmDelete from '../../Main/CustomConfirmAlert/CustomConfirmAlert';
import { OptionPaper } from '../../../styles';
import { confirmDelete } from '../../../utils';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function DeleteUser({ userName, userId }) {
  const { setAllUsers } = useContext(AllUserContext);
  const deleteWho = `Delete ${userName}`;
  const navigate = useNavigate();

  async function deleteUser(id, setAllUsers) {
    try {
      const body = { userId: userId };
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
    <OptionPaper elevation={5}>
      <p>{deleteWho}?</p>
      <Button
        sx={{ m: 1 }}
        color="warning"
        size="small"
        startIcon={<DeleteForeverIcon />}
        onClick={() => {
          confirmDelete(deleteUser, userId, setAllUsers);
        }}
      >
        Delete
      </Button>
    </OptionPaper>
  );
}
