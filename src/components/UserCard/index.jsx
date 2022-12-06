import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../utils';

export default function UserCard({ user, setAllUsers }) {
  const projectLink = `/adminbackend/user/${user._id}`;

  return (
    <UCard>
      <CardContent>
        <Typography variant="h5">{user.username}</Typography>
      </CardContent>
      <CardActions>
        <MyLink to={projectLink} size="small">
          <Button variant="outlined" size="small">
            {/* {user.projects[0].title} */}
          </Button>
        </MyLink>
        <Button variant="outlined" size="small">
          Edit user{' '}
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            deleteUser(user._id, setAllUsers);
          }}
        >
          X
        </Button>
      </CardActions>
    </UCard>
  );
}

const UCard = styled(Card)`
  width: fit-content;
  margin: 10px;
`;

const MyLink = styled(Link)`
  text-decoration: none;
`;
