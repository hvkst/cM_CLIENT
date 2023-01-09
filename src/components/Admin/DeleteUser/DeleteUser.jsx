import { useContext, useState } from 'react';
import { AllUserContext } from '../../../context/AllUserContext';
import { confirmDelete } from '../../../utils';

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { OptionPaper } from '../../../styles';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function DeleteUser({ userName, userId }) {
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
      {/* <Typography variant="h5">{deleteWho}</Typography> */}
      <Typography variant="h5">{deleteWho}?</Typography>
      <IconButton
        color="primary"
        onClick={() => {
          confirmDelete(deleteUser, userId, setAllUsers);
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </OptionPaper>
  );
}
export default DeleteUser;
