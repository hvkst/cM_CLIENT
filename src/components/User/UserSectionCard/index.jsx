import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

export default function UserSectionCard({ section }) {
  return (
    <UCard>
      <CardContent>
        <Udiv variant="h5">{section.title}</Udiv>
        <Udiv>
          {/* <p>Description:</p> */}
          <p>{section.description}</p>
        </Udiv>
        <Udiv>
          {/* <p>Preparation:</p> */}
          <p> {section.prep}</p>
        </Udiv>
        <Udiv>
          {/* <p>Main: </p> */}
          <p>{section.main}</p>
        </Udiv>
        <Udiv>
          {/* <p>Final</p> */}
          <p>{section.final}</p>
        </Udiv>
        <Button variant="outlined" size="small">
          upload files / data here
        </Button>{' '}
        <br />
        <Button variant="outlined" size="small">
          chat / comment here
        </Button>
      </CardContent>
    </UCard>
  );
}

const UCard = styled(Card)`
  width: fit-content;
  margin: 10px;
`;

const Udiv = styled('div')`
  display: flex;
`;
// const MyLink = styled(Link)`
//   text-decoration: none;
// `;
