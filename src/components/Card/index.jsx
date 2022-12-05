import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  const projectLink = `/adminbackend/user/${user._id}`;

  return (
    <UCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.username}
        </Typography>
        <Typography variant="body2">Maybe contact Info here</Typography>
      </CardContent>
      <CardActions>
        <Link to={projectLink} size="small">
          {user.project[0].title}
        </Link>
        <Button size="small">Edit user </Button>
      </CardActions>
    </UCard>
  );
}

const UCard = styled(Card)`
  width: fit-content;
  margin: 10px;
`;
