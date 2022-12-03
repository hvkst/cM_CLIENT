import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserCard({ user }) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          since 03.12.2022
        </Typography>
        <Typography variant="body2">Maybe contact Info here</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{user.project.title}</Button>
        <Button size="small">Edit user </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
