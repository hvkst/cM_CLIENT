import * as React from 'react';
import { styled } from '@mui/system';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { confirmDelete, deleteUser, germanDate } from '../../../utils';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { UserData } from './UserCard.style';
import moment from 'moment/moment';

export default function UserCard({ user, setAllUsers }) {
  const projectLink = `/adminbackend/user/${user._id}`;

  console.log(user);

  return (
    <MyLink to={projectLink}>
      <SimplePaper>
        <UserData>
          <h3>{user.username}</h3>
          <p>{user.projects[0].title}</p>
          <p>created at: {germanDate(user.projects[0].createdAt)}</p>
          <p>due date: {germanDate(user.projects[0].dueDate)}</p>
          <p>{new moment().to(moment(user.projects[0].dueDate), true)} left</p>
        </UserData>

        <IconButton
          color="primary"
          onClick={() => {
            confirmDelete(deleteUser, user._id, setAllUsers);
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
      </SimplePaper>
    </MyLink>
  );
}

const MyLink = styled(Link)`
  text-decoration: none;
`;
